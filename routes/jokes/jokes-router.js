const express = require("express");

const Jokes = require("./jokes-module.js");

const router = express.Router();

//Jokes

router.get("/", (req, res) => {
  Jokes.get()
    .then(jokes => {
      res.status(200).json(jokes);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching jokes from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Jokes.getById(id)
    .then(joke => {
      const booleanJoke = {
        ...joke[0],
        completed: !!+`${joke.completed}`
      };

      if (!joke[0]) {
        return res.status(404).json({ message: "Invalid joke id" });
      } else {
        res.status(200).json(booleanJoke);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching joke from database" });
    });
});

router.post("/", (req, res) => {
  const joke = req.body;

  if (!joke.joke_name) {
    return res.status(404).json({ message: "Missing joke name" });
  }

  Jokes.add(joke)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding joke to database" });
    });
});

//comments

router.get("/:id/comments", (req, res) => {
  const { id } = req.params;
  console.log(id);
  Jokes.getJokes(id)
    .then(comments => {
      console.log(comments);
      if (!comments[0]) {
        res.status(404).json({ message: "Invalid joke id" });
      } else {
        res.status(200).json(comments);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching comments from database" });
    });
});

router.post("/:id/comments", (req, res) => {
  const { id } = req.params;
  const task = req.body;
  console.log(id);
  Jokes.getById(id).then(joke => {
    if (!joke[0]) {
      return res.status(404).json({ message: "Invalid joke ID" });
    }
    if (!task.task_description) {
      return res.status(404).json({ message: "Missing task description" });
    }
    Jokes.addTask(id, task)
      .then(count => {
        res.status(201).json(count);
      })
      .catch(err => {
        res.status(500).json({ message: "Error adding task to database" });
      });
  });
});

module.exports = router;
