import express from "express";

const router = express.Router();

router.get("/signin", (req, res) => {
    res.send("Signin route");
});

export { router as currentuserRouter }