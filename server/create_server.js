var http = require('http')

http.createServer(function(req,res){
    console.log(req.url);

    res.write('hello')
    res.end()
}).listen(3010,()=>console.log("server is running http://localhost:3010"))