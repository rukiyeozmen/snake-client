const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.40.99',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: RMZ");
  });



  conn.on("data", (data) => {
    console.log("you ded cuz you idled ", data);
  });

  return conn;
};

module.exports = { connect };