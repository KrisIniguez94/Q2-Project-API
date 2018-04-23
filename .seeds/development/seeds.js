
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {image_url:'https://placehold.it/300/200' , make_model: 'Porsche 911', description: "Best sports car on planet earth!"},
        {image_url:'https://placehold.it/300/200' , make_model: 'Bugatti Veyron', description: "Most expensive sports car on planet earth!"},
        {image_url:'https://placehold.it/300/200' , make_model: 'BMW E63', description: "A collectors classic!"}
      ]);
    });
};
