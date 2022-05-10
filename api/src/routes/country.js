const { Router } = require("express");
const router = Router();
const { findAll, CountryByid } = require("../controllers/country.controller");

//one country
router.get("/:id", CountryByid);
//all countries
router.get("/", findAll);

module.exports = router;
