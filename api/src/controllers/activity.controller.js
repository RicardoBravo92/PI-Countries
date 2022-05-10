const { Activity, Country } = require("../db");

exports.create = async (req, res) => {
  try {
    const { countries, name, difficulty, duration, season } = req.body;
    const activity = await Activity.create({
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
    await activity.setCountries(countriesfounded);
    return res.json(activity);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
