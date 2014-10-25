devconf-calendar
================

HTML5DevConf calendar transformed to JSON data by Amalgamatic

1. Clone this repostiory
2. `npm install`
3. `npm install -g browserify uglify-js`
4. `browserify main.js -o bundle.js && uglifyjs bundle.js -o bundle.min.js`

Start up a web server to serve index.html&mdash;it won't work as a file URL due to CORS restrictions&mdash;and start using your JSON data. Sure, you can just copy and paste it out of your browser. Or you can edit `main.js` and `index.html` to do stuff with it right there. Just be sre to run the `browserify`/`uglifyjs` step if you edit `main.js`.

If it's still working, you can check it out at http://trott.github.io/devconf-calendar/.
