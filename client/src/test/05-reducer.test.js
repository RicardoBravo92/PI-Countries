import reducer from "../reducer/index"
import { getCountryById, setPage } from "../actions";

xdescribe("reducer", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(
      reducer(undefined, {
        countries: [],
        allCountries: [],
        country: [],
        page: 1,
      })
    ).toEqual({
      countries: [],
      allCountries: [],
      country: [],
      page: 1,
    });
  });

  it("deberia modificar contry al pais del payload", () => {
    const payload1 = {
      id: "ECU",
      name: "Ecuador",
      image: "https://flagcdn.com/ec.svg",
      continent: "Americas",
      capital: "Quito",
      subregion: "South America",
      area: 276841,
      population: 17643060,
      activities: [],
    };
    const someState = {
      countries: [],
      allCountries: [],
      country: [],
      page: 1,
    };
    expect(reducer(someState, getCountryById(payload1))).toEqual({
      countries: [],
      allCountries: [],
      country: [
        {
          id: "ECU",
          name: "Ecuador",
          image: "https://flagcdn.com/ec.svg",
          continent: "Americas",
          capital: "Quito",
          subregion: "South America",
          area: 276841,
          population: 17643060,
          activities: [],
        },
      ],
      page: 1,
    });
  });

  it("deberia modificar la pagina de 1 a 2 en el paginado", () => {
    const payload = 2;
    const someState = [
      {
        countries: [],
        allCountries: [],
        country: [],
        page: 1,
      },
    ];
    expect(reducer(someState, setPage(payload))).toEqual({
      countries: [],
      allCountries: [],
      country: [],
      page: 2,
    });
  });
});
