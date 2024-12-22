const http = require('http')


const Server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write("Yokoso watashi no soul society ye")
        res.end()

    }if(req.url==='/about'){

        res.end("oiiii this is abot me")
    
    }

    res.end("OOPs!!")

  

})

Server.listen(5000)