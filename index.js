'use strict';

var RE_FORMAT = /^\/(\d+)(?:x(\d+))?(?:\/([\da-f]{6}|[\da-f]{3}))?(?:\/([\da-f]{6}|[\da-f]{3}))?\/?(?:\??text=(.+))?$/i;

module.exports = function (req, res) {
  var m = req.url.match(RE_FORMAT) || {};

  var width = m[1] || 100;
  var height = m[2] || width;
  var color_bg = m[3] || 'eee';
  var color = m[4] || 'aaa';
  var text = m[5] ? decodeURIComponent(m[5]) : (width + 'x' + height);

  var svg = '<svg width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg">\
<rect width="' + width + '" height="' + height + '" fill="#' + color_bg + '"/>\
<text x="' + (width / 2) + '" y="' + (height / 2) + '" dy=".3em" fill="#' + color + '" style="text-anchor:middle;font:bold 10pt arial,sans-serif">' + text + '</text>\
</svg>';

  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(svg);
};
