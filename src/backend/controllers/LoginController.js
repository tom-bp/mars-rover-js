import express from "express";
import { NotFoundErrorName } from "../errors/NotFoundError.js";
import * as AccountsService from "../services/AccountsService.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    AccountsService.getTokenForUser(username, password)
        .then((token) => {
            res.send({ message: `hello, ${username}`, token: token });
        })
        .catch(function (err) {
            if (err.name === NotFoundErrorName) {
                res.sendStatus(404);
            } else {
                console.error(err);
                res.sendStatus(500);
            }
        });
});

export default router;
