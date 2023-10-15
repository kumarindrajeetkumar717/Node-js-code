const http = require('http');

const PORT = 3030;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) =>{

      if (req.url == '/') {
        
     res.statusCode = 200;
     res.setHeader('Content-type','text/plain');
     res.end('welcome to node Js server by indrajet');

      } else if(req.url == '/about') {
     res.statusCode = 200;
     res.setHeader('Content-type','text/plain');
     res.end('About Page!');

      } else if (req.url == '/contact') {
     res.statusCode = 200;
     res.setHeader('Content-type','text/plain');
     res.end('Contact Page!');

      } else if(req.url == '/products') {

     res.statusCode = 200;
     res.setHeader('Content-type','text/plain');
     res.end('Node server created by indrajeet kumar');
     res.end(JSON.stringify({productName:"Product 1"}));
} else {

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(' Server Error!')

}

});

server.listen(PORT, () =>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});