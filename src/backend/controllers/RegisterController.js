import express from "express";
import * as AccountsRepository from "../repositories/AccountsRepository";
import database from "../repositories/database";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  if (await AccountsRepository.doesUsernameExist(body.username)){
      console.log(body);
      res.sendStatus(400)
      return
  }
  await AccountsRepository.addUserToDatabase(
    body.name,
    body.username,
    body.password
  );
  res.sendStatus(201);
});


export default router;