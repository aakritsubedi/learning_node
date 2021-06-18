const fastify = require("fastify")({
  logger: true,
});

// Database
const db = require('./db');


// Routes
const routes = require('./routes');
routes.forEach((route, index) => {
  fastify.route(route);
});
fastify.get("/", async (request, reply) => {
  return {
    app: "Learning Fastify",
    version: "v1.0.0",
    author: "Aakrit Subedi",
  };
});

// Starting a server
const PORT = 5000;
(async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(`Unable to start server at ${address}.`);
    process.exit(1);
  }
})();
