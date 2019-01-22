var connect = require('connect');
var serveStatic = require('serve-static');

var argv = require('minimist')(process.argv.slice(2));

var site = "dist/noviz";

if(argv['site'] == "sr" || argv['site'] == "speaking-radar")
{
    site = "dist/sr-website";
}

console.log("Site: "+site)

connect().use(serveStatic(site)).listen(3000, function(){
    console.log('Test server running on 3000...');
    console.log('http://localhost:3000')
});