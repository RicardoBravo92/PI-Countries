/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true }));
  describe('GET /countries', () => {
    it('should get 200 for all countries', () =>
      agent.get('/countries').expect(200)
    );   
    it('should get 400 if id doent exist', () =>
      agent.get('/countries/OTH').expect(400)
    );    
    it('should get 200 for a name search', () =>
      agent.get('/countries?name=Aruba').expect(200)
    );          
  });
});
