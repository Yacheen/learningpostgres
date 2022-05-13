import express from "express";
const app: express.Application = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get(
	"/",
	(
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		console.log("hello world");
	}
);

app.listen(5000, () => {
	console.log("listening on port 5000");
});
