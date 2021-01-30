const express = require("express");
const router = express.Router();
const serverAgGridController = require("../controllers/serverAgGrid.js")

router.post("/getData", function (req, res) {
    serverAgGridController.getData(req.body, (rows, lastRow) => {
        res.json({rows: rows, lastRow: lastRow});
    });
});

module.exports = router;