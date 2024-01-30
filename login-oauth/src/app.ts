import express from "express";
import { json } from "body-parser";
import { signinRouter } from "../routes/signin";

const app = express();
const port = 12000;

app.use(json());
app.use(signinRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})