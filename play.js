const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.40.99',
    port: 50541
  });

  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("you ded cuz you idled ", data);
  });

  return conn;
};

console.log("Connecting...");
connect();