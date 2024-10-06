const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter {}

// initialize the object i create
const myEmitter = new Emitter();

const PORT = process.env.PORT || 5500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);

  let path;

  if (req.url === "/" || req.url === "index.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    path = path.join(__dirname, "index.html");
    fs.readFile(path, "utf8", (err, data) => {
      res.end(data);
    });
  }
});

// myEmitter.on("log", (msg) => logEvents(msg));
// myEmitter.emit("log", "log is emitted");
