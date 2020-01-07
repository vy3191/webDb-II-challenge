
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
     table.integer("id").notNull().unique().primary();
  })
};

exports.down = function(knex) {
  
};
