const { Router } = require("express");
const router = Router();
const { findAll, CountryByid } = require("../controllers/country.controller");

router.get("/:id", CountryByid);
router.get("/", findAll);

module.exports = router;
