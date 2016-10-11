'use strict';

var fs = require('fs');

var RE_FORMAT = /^\/(\d+)(?:x(\d+))?(?:\/([\da-f]{6}|[\da-f]{3}))?(?:\/([\da-f]{6}|[\da-f]{3}))?\/?(?:\??text=(.+))?$/i;

module.exports = function (req, res) {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, 'OK');
    fs.createReadStream('index.html').pipe(res);
    return;
  }

  var m = req.url.match(RE_FORMAT) || {};

  var width = m[1] || 100;
  var height = m[2] || width;
  var color_bg = m[3] || 'eee';
  var color = m[4] || 'aaa';
  var text = m[5] ? decodeURIComponent(m[5]) : (width + 'x' + height);

  var svg = '<svg width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg" style="background-color:#' + color_bg + ';">\
<text x="50%" y="50%" dy=".3em" fill="#' + color + '" style="text-anchor:middle;font:bold 15pt arial,sans-serif">' + text + '</text>\
</svg>';

  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(svg);
};
