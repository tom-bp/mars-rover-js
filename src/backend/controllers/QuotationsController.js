import express from "express";
import * as QuotationsService from "../services/QuotationsService.js";

const router = express.Router();

router.get("/:quotationId", (req, res) => {
    try {
        const quotation = QuotationsService.getQuotation(req.params.quotationId);
        res.send(quotation);
    } catch (err) {
        if (err.name === NotFoundErrorName) {
            res.sendStatus(404);
        } else {
            res.sendStatus(500);
        }
    }
});

export default router;
