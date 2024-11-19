var http = require('http')
var fs = require('fs')


http.createServer(server).listen(7002)


function server(req, res) {
    fs.readFile('Sample.html', function (err, data) {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data)
        res.end()
    })
}


