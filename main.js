var amalgamatic = require('amalgamatic');

var sched = require('amalgamatic-h5dcsched');
sched.setOptions({
    url: 'http://cors-anywhere.herokuapp.com/html5devconf.com/schedule.html'
});

amalgamatic.add('sched', sched);

var replacer = function (key, value) {
    if ((key === "url") && (typeof value === "string")) {
        value = value.replace(/^http:\/\/cors\-anywhere.herokuapp.com\//, 'http://');
    }
    return value;
};

var dumpAsJson = function (data) {
    var myContent = JSON.stringify(data, replacer, 2);
    var myNode = document.createTextNode(myContent);
    var pre = document.createElement('pre');
    pre.appendChild(myNode);
    document.body.appendChild(pre);
};

var pluginCallback = function (err, result) {
    document.body.innerHTML = '';
    if (err) {
        dumpAsJson(err);
    }

    dumpAsJson(result);
};

amalgamatic.search({pluginCallback: pluginCallback});

