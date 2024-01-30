import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest, BadRequestError } from "@ticket101/common";

const router = express.Router();

router.post("/api/users/signin",
[
    body("email")
        .isEmail()
        .withMessage("Email must be valid"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("You must supply a password")
]
,validateRequest, async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password)
    res.send("Successfully signed in!")
});

export { router as signinRouter }