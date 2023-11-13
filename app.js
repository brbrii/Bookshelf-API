const http = require("http");
("use strict");

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return;
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 400;
  const { url } = request;
  if (url === "/books") {
    // curl http://localhost:9000/books
  }
};

request.on("end", () => {
  body = Buffer.concat(body).toString();
  const { name } = JSON.parse(body);
  response.end();
});

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
