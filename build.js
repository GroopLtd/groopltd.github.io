var fs = require('fs');
var Mustache = require('mustache');

// The entire data object needs to be included in the dataset site so the OpenActive parser can read it
var data = JSON.parse(fs.readFileSync('data.json', { encoding:'utf8' }));
// Create a `data` property containing `data.json` so that Mustache can read it
data.json = JSON.stringify(data, null, 2);

var template = fs.readFileSync('datasetsite.mustache', { encoding:'utf8' })

// Use the resulting JSON with the mustache template to render the dataset site.
var html = Mustache.render(template, data);
fs.writeFileSync('index.html', html, { encoding:'utf8' });
