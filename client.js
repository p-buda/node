var http = require('http')

// Set url variable with the address of our file server
var url = 'http://localhost:8000'

// Use get() method to handle response from the server
http.get(url, (response) => {

    // This variable will store the received chunks of data
    var body = ''

    // Set encoding to receive string instead of buffer
    response.setEncoding('utf8')
    
    response.on('data', (chunk) => {
            body += chunk
            console.log(body)
    })

    // When the entire message is received, parse it from string to JSON object.
    response.on('end', () => {
        var jsonData = JSON.parse(body)
        console.log(jsonData)
    })
})
