const http = require('http'); // import 'http' package from Node

const server = http.createServer((request, response) =>{
    console.log('request', request.url)
    if(request.url === '/'){
        response.write('Homepage');
        response.end();
    }
    else if (request.url === '/about') {
        response.write('About page');
        response.end();
      }
    else if (request.url === '/contact') {
        response.write('Contact page');
        response.end();
    }
    else {
        response.statusCode = 404;
        response.write('404 Page');
        response.end();
    }
}); // create a server locally
server.listen(3000, ()=> console.log('Server is running on port 3000')); // listen to client requests on port/gateway 3000