import * as http from "http";
import { port } from "./config";

const server = http.createServer(
  (request, response) => {
    response.end(`Hello! Node.js with TypeScript. Port is ${port}.`);
  }
);
server.listen(port);
console.log(`http://localhost:${port} へアクセスください`);