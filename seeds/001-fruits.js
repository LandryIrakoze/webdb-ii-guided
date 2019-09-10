
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate() //resets the id primary key, instead of del()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'mango', delicious: true, avgWeight0z: 8.5},
        { name: 'papaya', delicious: true, avgWeight0z: 18.5},
        { name: 'pineapple', delicious: true, avgWeight0z: 15.5}
      ]);
    });
};
