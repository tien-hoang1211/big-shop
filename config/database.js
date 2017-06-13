const pg = require('pg');
var config = {
    user: 'postgres',
    database: 'BigStore',
    password: '12111992',
    host: 'localhost',
    port: 5432,
    max: 100,
    idleTimeoutMillis: 1000,
};
const pool = new pg.Pool(config);

function queryDB(sql, arrValue) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrValue, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

module.exports = queryDB;