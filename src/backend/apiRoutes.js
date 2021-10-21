import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import loginController from "./controllers/loginController.js";

const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/login", loginController);

router.use((req, res) => {
    res.sendStatus(404);
});

export default router;
