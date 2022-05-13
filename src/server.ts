import express, { Request, Response, Application, NextFunction } from "express";
const app: express.Application = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response, next: express.NextFunction) => {
	console.log("hello world");
	console.log("your elastic beanstalk instance is working smiley face");
});

//routes
//create a todo
app.post("/todos", async (req: Request, res: Response) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query(
			"INSERT INTO todo (description) VALUES($1) RETURNING *",
			[description]
		);
		res.json(newTodo.rows[0]);
	} catch (err: any) {
		console.error(err.message);
	}
});

//get all todos

app.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch (err: any) {
		console.error(err.message);
	}
});
//get a todo

app.get("/todos/:id", async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const todo = await pool.query(
			`SELECT * FROM todo WHERE todo_id = ${id}`
		);
		res.json(todo.rows);
	} catch (err: any) {
		console.error(err);
	}
});
//update a todo
app.put("/todos/:id", async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { description } = req.body;

		const updateTodo = await pool.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]
		);

		res.json("Todo was updated...");
	} catch (err: any) {
		console.error(err);
	}
});
//delete all todos
app.delete("/todos/:id", async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query(
			"DELETE FROM todo WHERE todo_id = $1",
			[id]
		);
		res.json(deleteTodo);
	} catch (err: any) {
		console.error(err);
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log("listening on port 5000");
});
