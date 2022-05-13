import { Pool } from "pg";

const pool = new Pool({
	user: "postgres",
	password: "dragonScimitars4lyfe!",
	host: "localhost",
	port: 5432,
	database: "perntodo",
});

export { pool };
