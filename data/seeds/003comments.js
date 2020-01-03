exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("comments").insert([
        {
          id: 1,
          comments_description: "rowValue1",
          postedBy: "username",
          jokeId: 2
        },

        {
          id: 2,
          comments_description: "rowValue2",
          postedBy: "username",
          jokeId: 2
        },

        {
          id: 3,
          comments_description: "rowValue3",
          postedBy: "username",
          jokeId: 2
        }
      ]);
    });
};
