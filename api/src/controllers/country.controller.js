const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

exports.findAll = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      let data = await Country.findAll({
        where: { name: { [Op.like]: `%${name}%` } },
        include: Activity,
      });
      return res.send(data);
    } else {
      let data = await Country.findAll({
        include: Activity,
      });
      return res.send(data);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.CountryByid = async (req, res) => {
  try {
    const { id } = req.params;
    const foundcountry = await Country.findOne({
      where: { id: id },
      include: Activity,
    });
    return res.send(foundcountry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
