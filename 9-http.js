const http = require('http');


    const server = http.createServer((req,res)=>{
        if(req.url==='/'){
            res.write('Welcome to the page');
            res.end();

        }
        if(req.url==='/about'){
            res.write('Welcome to the  about page');
            res.end();
        }
       
    
    })
    server.listen(3000)






