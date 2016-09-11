'use strict';

const http = require('http');

const PORT = process.env.PORT || 9191;
const RE_FORMAT = /^\/(\d+)(?:x(\d+))?(?:\/([\da-f]{6}|[\da-f]{3}))?(?:\/([\da-f]{6}|[\da-f]{3}))?(?:\??text=(.+))?$/i;

const app = http.createServer((req, res) => {
  let m = req.url.match(RE_FORMAT) || {};

  let width = m[1] || 100;
  let height = m[2] || width;
  let color = m[3] || 'aaa';
  let color_bg = m[4] || 'eee';
  let text = m[5] ? decodeURIComponent(m[5]) : `${width}x${height}`;

  let svg = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 ${width}px ${height}px" preserveAspectRatio="none">
	<rect width="${width}px" height="${height}px" fill="#${color_bg}"/>
	<text x="${width / 2}px" y="${height / 2}px" dy=".3em" fill="#${color}" style="text-anchor:middle;font:bold 10pt arial,sans-serif">${text}</text>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(svg);
});

app.listen(PORT, _ => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
