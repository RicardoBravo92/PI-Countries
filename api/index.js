//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Country } = require("./src/db.js");
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  try {
    axios.get("https://restcountries.com/v3/all").then((Countries) => {
      return Countries.data.map((c) => {
        Country.findOrCreate({
          where: {
            id: c.cca3,
            name: c.name.common,
            image: c.flags[0],
            continent: c.region,
            capital: c.capital ? c.capital[0] : "-",
            area: c.area ? c.area : null,
            subregion: c.subregion ? c.subregion : "-",
            population: c.population,
          },
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
