
exports.seed = async function(knex) {
   await knex("cars").truncate();
   await knex("cars").insert([
      {vin: 1234567890, make: "1997", model:"Nissan", mileage: 29.3, transmission: "Manual", title:"clean"},
      {vin: 1039483373, make: "1990", model:"Toyota", mileage: 30.3, transmission: "Auto", title:"clean"},
      {vin: 8473738249, make: "2016", model:"Honda", mileage: 32.3, transmission: "Automatic", title:"clean"}

   ])
};
