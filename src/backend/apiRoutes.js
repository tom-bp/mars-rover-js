import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import CameraController from "./controllers/CameraController.js";
import LoginController from "./controllers/LoginController.js";
import RegisterController from "./controllers/RegisterController.js";


const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/cameras", CameraController);
router.use("/login", LoginController);
router.use("/register", RegisterController);

router.use((req, res) => {
    res.sendStatus(404);
});

export default router;
