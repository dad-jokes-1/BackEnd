exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("jokes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("jokes").insert([
        {
          id: 1,
          jokeTitle: "Joke Name",
          question: "rowValue1",
          answer: "answer1",
          postedBy: "username",
          rating: 5,
          favorite: true,
          userId: null
        },

        {
          id: 2,
          jokeTitle: "Joke Name",
          question: "rowValue2",
          answer: "answer1",
          postedBy: "username",
          rating: 5,
          favorite: true,
          userId: null
        },

        {
          id: 3,
          jokeTitle: "Joke Name",
          question: "rowValue3",
          answer: "answer1",
          postedBy: "username",
          rating: 5,
          favorite: true,
          userId: null
        }
      ]);
    });
};
