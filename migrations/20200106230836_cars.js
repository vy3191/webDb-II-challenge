
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
     table.integer("id").notNull().unique().primary();
     table.integer("vin").notNull().unique();
     table.text("make").notNull().unique();
     table.text("model").notNull().unique();
     table.float("mileage")
     table.text("transmission").notNull();
     table.text("title").notNull();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars");
};
