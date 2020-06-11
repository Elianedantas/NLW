import Knex from 'knex';

export async function up(knex: Knex) { // criar a tabela
    return knex.schema.createTable('point_itens', table => {
        table.increments('id').primary();

        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');

        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('itens');
    });
}

export async function down(knex: Knex) { // voltar atrás (deleta a tabela)
    return knex.schema.dropTable('point_itens');
}