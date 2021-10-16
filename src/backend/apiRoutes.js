import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";

const router = express.Router();

router.use("/quotations", QuotationsController);

router.use((req, res) => {
    res.sendStatus(404);
});

export default router;
