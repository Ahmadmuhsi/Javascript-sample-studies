var http=require('http')


http.createServer(server).listen(700)



function server(req,res){
    res.write('muhsi')
    res.end()

}