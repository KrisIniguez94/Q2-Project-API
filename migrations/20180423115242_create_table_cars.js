
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.string('image_url');
    table.string('make_model');
    table.text('description');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars');

};
