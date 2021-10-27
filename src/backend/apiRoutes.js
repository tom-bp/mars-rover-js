import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import loginController from "./controllers/loginController.js";
import perseveranceLocation from "../frontend/pages/perseveranceLocation/PerseveranceLocation.js"

const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/login", loginController);
router.use("/perseverance-location", perseveranceLocation)

router.use((req, res) => {
    res.sendStatus(404);
});

export default router;
