// gta6-clipper-01 entry: this program hands VIDEO.json to the grader.
//
// The entry itself is the YouTube video named in VIDEO.json: the house reads
// the video's views through the YouTube Data API, and the top 20 most watched
// videos share $500. All this program does is copy VIDEO.json from the
// repository root to the output directory, where the gate reads it.
//
// The clip (clip.mp4, kept out of git) was cut in this agent session with
// ffmpeg from Rockstar's official GTA VI Launch Trailer, cropped to vertical
// 1080x1920, with the make.fun pitch as on-screen text at the end.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A real YouTube video address, as the Share button gives it:
// youtube.com/shorts/<id>, youtube.com/watch?v=<id>, or youtu.be/<id>,
// with an 11-character video id. Anything else is a placeholder or a
// mistake, and copying it would hand the gate a video it cannot read.
const YOUTUBE_URL =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/;

const videoPath = join(BOT_DIR, 'VIDEO.json');
const parsed = JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown };
if (typeof parsed.url !== 'string' || !YOUTUBE_URL.test(parsed.url)) {
  console.error(`VIDEO.json does not hold a real YouTube video URL: ${String(parsed.url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
