"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    password: "dragonScimitars4lyfe!",
    host: "localhost",
    port: 5432,
    database: "perntodo",
});
exports.pool = pool;
