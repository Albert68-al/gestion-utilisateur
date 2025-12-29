const { Pool } = require('pg');
const path = require('path');

// Charger .env à la racine du projet
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: Number(process.env.DB_PORT),
});

pool.query('SELECT 1')
    .then(() => console.log('DB connectée avec succès'))
    .catch(err => console.error('Erreur DB ', err));

module.exports = pool;
