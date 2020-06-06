import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') //devolve o caminho de acordo com o SO
    },
    useNullAsDefault: true,
});

export default connection;