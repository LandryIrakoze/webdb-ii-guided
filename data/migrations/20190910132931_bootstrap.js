//changes we want to make
exports.up = function(knex) {
  // table called fruits
  // id, pk, autoincrement, integer
  // name: string up to 128, unique, required (not null)
  // avg weight0z, decimals
  // delicious: boolean
  return knex.schema
    // create a table called fruits
    .createTable('fruits', tbl => {
        // id, pk, auto-increments
        tbl.increments();
        // name: string up to unique, required (not null)
        // tbl.text() or tbl.string()
        tbl
            .string('name', 128)
            .unique()
            .notNullable();
        // avgWeight0z, decimal
        tbl.decimal('avgWeight0z');
        // delicious boolean
        tbl.boolean('delicious');
    })
};

// to revert the changes from the up function
exports.down = function(knex) {
  return knex.schema
            .dropTableIfExists('fruits');
};
