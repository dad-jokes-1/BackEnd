exports.up = function(knex) {
  return knex.schema
    .createTable("jokes", tbl => {
      tbl.increments();
      tbl.string("jokeTitle").notNullable();
      tbl.string("question").notNullable();
      tbl.string("answer");
      tbl
        .boolean("favorite")
        .notNullable()
        .defaultTo(0);
      tbl.integer("rating");
      tbl
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("comments", tbl => {
      tbl.increments();

      tbl.string("comments_description").notNullable();

      tbl
        .integer("postedBy")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("jokeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("jokes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("first_name").notNullable();
      tbl.string("last_name").notNullable();
      tbl.string("email").notNullable();
      tbl
        .string("username")
        .unique()
        .notNullable();
      tbl.string("password").notNullable();
      tbl.string("picture");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("comments")
    .dropTableIfExists("jokes");
};
