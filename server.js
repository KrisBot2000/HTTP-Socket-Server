const net = require('net');

const port = 8080;

const server = net.createServer(function(request) {
  console.log("request received");

  request.on('data', function(data) {

    let stringData = data.toString();
    console.log("stringData: ", stringData);
    let arrayData = stringData.split('\n');
    console.log("arrayData: ", arrayData);
    let firstLineElements = arrayData[0].split(" ");
    console.log("firstLineElements: ", firstLineElements);
    let reqMethod = firstLineElements[0];
    console.log("reqMethod: ", reqMethod);
    let reqFile = firstLineElements[1];
    console.log("reqFile: ", reqFile);

    let body = null;
    switch (reqFile){
      case "/":
          body = "index.html";
          break;
      case "/index.html":
          body = "index.html";
          break;
      case "/hydrogen.html":
          body = "hydrogen.html";
          break;
      case "/helium.html":
          body = "helium.html";
          break;
      case "/css/styles.css":
          body = "styles.css";
          break;
      default:
          body = "404.html";
    }


    request.write(`HTTP/1.1 200 OK\nServer: KrisBot2000 Homemade Server\nDate: Wed, 08 Jul 2015 22:31:15 GMT\n\n${body}`);

    request.end();
  });



});

server.listen(port, function(){
  console.log("Server listening at http://localhost:" + port);
});