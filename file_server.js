// Use require() function to import Node.js core modules we want (fs and http) 
var http = require('http')
var fs = require('fs')

// Specify the path to the file to be served
var fileToServe = 'luke.json'

// Create an HTTP server to listen on port 8000
// Note that createServer method takes as its argument a callback function.
// the callback function is in a form of an arrow function: (req, res) => {...}
var server = http.createServer((req, res) => {
    // request handling goes here
    // Use the fs code module to handle reading the file as a stream
    var srcStream = fs.createReadStream(fileToServe)
    // use pipe() method to pipe the file read stream into a server write (response) stream
    srcStream.pipe(res)
    // Add header to the server response to specify the type of response (200 = OK)
    // and also what data type is served (JSON)
    res.writeHead(200, {'Content-type' : 'application/json'})

})
server.listen(8000)