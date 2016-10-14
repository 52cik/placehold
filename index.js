'use strict';

var fs = require('fs');

var RE_FORMAT = /^\/(\d+)(?:x(\d+))?(?:\/([\da-f]{6}|[\da-f]{3}))?(?:\/([\da-f]{6}|[\da-f]{3}))?\/?(?:\??text=(.+))?$/i;

module.exports = function (req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', function(err, data) {
      if (err) throw err;

      var html = data.toString().replace(/localhost:9191/g, req.headers.host);

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });

    return;
  }

  var m = req.url.match(RE_FORMAT) || [];

  var width = m[1] || 100;
  var height = m[2] || width;
  var color_bg = m[3] || 'eee';
  var color = m[4] || 'aaa';
  var text = m[5] ? decodeURIComponent(m[5]) : (width + 'x' + height);

  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" style="width: 100%;height: 100%;margin:auto;background-color:#' + color_bg + ';" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none">\
<text x="50%" y="50%" dy=".3em" fill="#' + color + '" style="text-anchor:middle;font:bold 15pt arial,sans-serif">' + text + '</text>\
</svg>';

  res.writeHead(200, {'Content-Type': 'image/svg+xml'});
  res.end(svg);
};
