const { Activity, Country } = require("../db");

exports.create = async (req, res) => {
  try {
    const { countries, name, difficulty, duration, season } = req.body;
    const createdactivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    const countriesfounded = await Country.findAll({
      where: {
        name: countries,
      },
    });
    await createdactivity.setCountries(countriesfounded);
    return res.json(createdactivity);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
