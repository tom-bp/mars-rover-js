import express from "express";
import * as AccountsService from "../services/AccountService.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const username = req.query.username;
        const password = req.query.password;
        AccountsService.getTokenForUser(username, password).then((token) => {
            res.send({ message: `hello, ${username}`, token: token });
        });
    } catch (err) {
        if (err.name === NotFoundErrorName) {
            res.sendStatus(404);
        } else {
            console.error(err);
            res.sendStatus(500);
        }
    }
});

export default router;