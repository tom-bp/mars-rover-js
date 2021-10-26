import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import ImageController from "./controllers/ImageController.js";

const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/pictures", ImageController);


router.use((req, res) => {
    res.sendStatus(404);
});

export default router;