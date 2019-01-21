var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic("dist")).listen(3000, function(){
    console.log('Test server running on 3000...');
    console.log('http://localhost:3000')
});