const fastify = require("fastify")({
  logger: true,
});
fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'Todo API' }
  }
})
// Database
const db = require("./db");

// Routes
const routes = require("./routes");
routes.forEach((route) => {
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
    fastify.log.error(`Unable to start server.`);
    process.exit(1);
  }
})();
