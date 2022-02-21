const express = require("express");
const path = require("path");

// init server
const server = express();
const port = 3000;

server.use(express.static("client"));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.html"));
});

server.listen(port, () => console.log(`server is running at port ${port}`));
