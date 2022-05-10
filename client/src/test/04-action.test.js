import {
  getCountryById,
  filterCountryByContinent,
  postActivities,
  setOrder,
  setPage,
} from "../actions/index.js";

describe("Action Creators", () => {  
  // it('Debería retornar una action con las propiedades type "GET_COUNTRY_BY_ID" y payload', () => {
  //   expect(getCountryById("COL")).toEqual({
  //     type: "GET_COUNTRY_BY_ID",
  //     payload:{"id": "COL",
  //     "name": "Colombia",
  //     "image": "https://flagcdn.com/co.svg",
  //     "continent": "Americas",
  //     "capital": "Bogotá",
  //     "subregion": "South America",
  //     "area": 1141748,
  //     "population": 50882884,
  //     "activities": []},
  //   });
  // });
  // it('Debería retornar una action con las propiedades type "FILTER_BY_CONTINENT" y payload', () => {
  //   expect(filterCountryByContinent("Americas")).toEqual({
  //     type: "FILTER_BY_CONTINENT",
  //     payload: "Americas",
  //   });
  // });
  // it('Debería retornar una action con la propiedad type "POST_ACTIVITY" y el payload ', () => {
  //   expect(postActivities({
  //       "name":"activitytest",
  //       "difficulty":3,
  //       "duration":4,
  //       "season":"summer",
  //       "countries":["Venezuela","Chile"]
  //     })).toEqual({
  //     type: "POST_ACTIVITY",
  //     payload: {
  //       "id": 1,
  //       "name": "activitytest",
  //       "difficulty": 3,
  //       "duration": 4,
  //       "season": "summer"
  //   },
  //   });
  // });

  it('Debería retornar una action con las propiedades type "SET_ORDER" y payload', () => {
    expect(setOrder("Max")).toEqual({
      type: "SET_ORDER",
      payload: "Max",
    });
  });

  it('Debería retornar una action con las propiedades type "SET_PAGE" y payload', () => {
    expect(setPage(2)).toEqual({
      type: "SET_PAGE",
      payload: 2,
    });
  });
  it('Debería retornar una action con las propiedades type "FILTER_BY_CONTINENT" y payload', () => {
    expect(filterCountryByContinent("Americas")).toEqual({
      type: "FILTER_BY_CONTINENT",
      payload: "Americas",
    });
  });
});
