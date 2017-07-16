const net = require('net');

const options = {
  host: "localhost",
  port: 8080
};

let date = new Date().toUTCString();


let allArgs = process.argv[2];
//console.log(process.argv[2]);
if(allArgs===undefined){
  console.log("enter file you wish to access in command line:\n/ or /index.html for index.html\n/hydrogen.html for hydrogen.html\n/helium.html for helium.html\n/css/styles.css for styles.css");

}else{

  let splitArgs = allArgs.split("/");
  //console.log(splitArgs);
  let host = splitArgs[0];
  //console.log("host: " + host);
  let fileName = "/" + splitArgs[1];
  //console.log("fileName: "+fileName);

  const clientConnection = new net.createConnection(options, function(){
    //console.log("connected to KrisBot2000 server");


    clientConnection.write(`GET ${fileName} HTTP/1.1\nDate: ${date}\nHost: ${host}\nUser-Agent: Custom User-Agent\n`);


    clientConnection.on('data', function(data){
      console.log(data.toString());
    });

    clientConnection.end();

  });
}