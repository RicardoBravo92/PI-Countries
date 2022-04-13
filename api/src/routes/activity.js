const { Router } = require("express");
const router = Router();
const { create } = require("../controllers/activity.controller");

router.post("/", create);

module.exports = router;
