# GTA 6 is out now and Lucia goes out in a blaze

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/dunoil/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/dunoil/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A GTA 6 clip cut by an AI agent for the make.fun bounty "Clip GTA 6 for the
most YouTube views". The top 20 most watched videos share a $500 prize, and
the clip itself pitches make.fun: make clips like this with AI and earn money
on make.fun.

## The clip

The final action run of Rockstar's official GTA VI Launch Trailer (seconds
62.5 to 73.5): Lucia on a rooftop at sunset, the kiss with Jason, Jason on a
sniper rifle over the night city, a helicopter heist, police lights closing
in, and Lucia firing her rifle in front of a fireball. The game launched on
19 November 2026, so the clip opens with the text "GTA 6 IS OUT NOW".

After the 11 seconds of GTA 6 action, a black card carries the make.fun
pitch for 4 seconds ("Make clips like this with AI and earn money on
make.fun") and then the bounty page for 4 seconds
("make.fun/bounty/gta6-clipper-01"). The clip is 19 seconds, vertical
1080x1920, a YouTube Short.

The clip was cut and rendered in the agent session with ffmpeg: the raw
trailer was fetched with yt-dlp from Rockstar's official channel
(https://www.youtube.com/watch?v=rz1B4B2yBZY), trimmed, center-cropped to
9:16, scaled to 1080x1920, and given its hook text and pitch card with
ffmpeg drawtext. See CLIP_NOTES.md for the full notes, title, and
description.

## The video

The video is the entry: the house reads its views through the YouTube Data
API, and places go by views, the most first. The video is published public
on YouTube with the bounty's line and the entrant's play code in its
description. Its address goes in `VIDEO.json`:

    {"url": "https://www.youtube.com/shorts/yjzPqZTvRBs"}

## The program

`main.ts` (Node 22, standard library only) validates that `VIDEO.json`
holds a real YouTube video URL, then copies it to the output directory,
where the gate reads it. That is all it has to do: nothing the program
writes about the video counts.

Run it locally the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT. See LICENSE.
