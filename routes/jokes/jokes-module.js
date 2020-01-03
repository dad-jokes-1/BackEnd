const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
  add,
  getJokes,
  addJokes
};

function get() {
  return db("jokes");
}

function getById(id) {
  return db("jokes").where({ id });
}

function add(joke) {
  return db("jokes").insert(joke);
}

function getJokes(id) {
  return db("jokes")
    .innerJoin("comments", "comments.jokesId", "comments.postedBy", "jokes.id")
    .select(
      "comments.comments_description",
      "comments.jokesId",
      "comments.postedBy"
    )
    .where({ project_id: id });
}

function addJokes(id, task) {
  return db("tasks")
    .where({ project_id: id })
    .insert(task);
}
