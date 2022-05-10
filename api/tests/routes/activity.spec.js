/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, Activity, conn } = require("../../src/db.js");

const agent = session(app);

describe("Country routes", () => {
  before(
    () => conn.authenticate(),
    Activity.destroy().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Country.sync({ force: true }));
  describe("POST /activity", () => {
    it("should get 200 if activity send with all requirement", () =>
      agent
        .post("/activity")
        .send({
          name: "activitytest",
          difficulty: 3,
          duration: 4,
          season: "summer",
          countries: ["Venezuela"],
        })
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.eql({
            id: 1,
            name: "activitytest",
            difficulty: 3,
            duration: 4,
            season: "summer",
          });
        }));

    it("should get 400 because difficulty its over 5", () =>
      agent
        .post("/activity")
        .send({
          name: "activitytest2",
          difficulty: 6,
          duration: 5,
          season: "summer",
          countries: ["Argentina"],
        })
        .expect(400));
  });
});
