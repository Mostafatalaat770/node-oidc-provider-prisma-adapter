import express from "express";
import app from "./app";

const server = express();
const port = 3000;

server.use(app);

server.listen(port, () => {
	console.log(`oidc-provider listening on port ${port}`);
});
