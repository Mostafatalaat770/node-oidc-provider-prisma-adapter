import express from "express";
import { oidcController } from "./oidc";

const app = express();

app.use(
	express.json({
		limit: "1mb",
	})
);

app.use("/oidc", oidcController);

export default app;
