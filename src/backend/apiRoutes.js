import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import CameraController from "./controllers/CameraController.js";

const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/cameras", CameraController);


router.use((req, res) => {
    console.log(req.path);
    res.sendStatus(404);
});

export default router;
