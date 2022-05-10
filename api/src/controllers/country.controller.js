const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

exports.findAll = async (req, res) => {
  try {
    const { name, order, ASC, continent } = req.query;
    const a = ASC == "DESC" ? "DESC" : "ASC";
    let data = await Country.findAll({
      where: {
        name: { [Op.like]: `%${name ? name : ""}%` },
        continent: { [Op.like]: `%${continent ? continent : ""}%` },
      },
      order: [[order ? order : "id", a]],
      include: Activity,
    });
    return res.send(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.CountryByid = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findOne({
      where: { id: id.toUpperCase()},
      include: Activity,
    });
    if(country==null){
      res.status(400).json("Not founded")
    }else{
      return res.send(country);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
