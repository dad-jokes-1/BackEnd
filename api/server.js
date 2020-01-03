const express = require("express");
const helmet = require("helmet");

const JokesRouter = require("../routes/jokes/jokes-router.js");
const CommentsRouter = require("../routes/comments/comments-router.js");
const UsersRouter = require("../routes/users/users-router.js");

const server = express();

//initial GET
server.get("/", (req, res) => {
  res.json({ message: "server is up and running" });
});

server.use(helmet());
server.use(express.json());

server.use("/api/jokes", JokesRouter);
server.use("/api/resources", CommentsRouter);
server.use("/api/task", UsersRouter);

module.exports = server;
