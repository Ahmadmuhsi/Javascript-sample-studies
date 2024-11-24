var http = require('http')
var fs = require('fs')
var url= require('url')


http.createServer(server).listen(7002,()=>
    console.log("Server started")
)


function server(req, res) {

    var q=url.parse(req.url,true)
   // console.log(q.pathname)



    if(q.pathname==='/'){

    
    fs.readFile('Sample.html', function (err,data) {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data)
        res.end()
    })
}else if(q.pathname==='/signup'){
    fs.readFile('signup.html',(err,data)=>{
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data)
        res.end()
    })
    
}else if(q.pathname==='/signupaction'){
    //console.log(q.query.lname+' '+q.query.fname)
    res.writeHead(200, { 'content-type': 'text/html' })
   res.write('<h1>'+q.query.fname+' '+q.query.lname+'</h1>')
   res.end()


}else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('error')
    res.end()
}

}


