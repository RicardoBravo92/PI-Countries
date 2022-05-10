import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_ORDER,
  SET_PAGE,
  POST_ACTIVITY,
  FILTER_BY_CONTINENT,
} from "../constants";

const initialState = {
  countries: [],
  allCountries: [],
  country: [],
  page: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        country: action.payload,
      };

    case POST_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const continentFilter =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((country) => country.continent === action.payload);
      return {
        ...state,
        countries: continentFilter,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_ORDER:
      let ordered = state.countries;

      action.payload === "Asc" &&
        ordered.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

        action.payload === "Desc" &&
        ordered.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        action.payload === "Max" &&
        ordered.sort((a, b) => {
          return b.population - a.population;
        });
        action.payload === "Min" &&
        ordered.sort((a, b) => {
          return a.population - b.population;
        });

      return {
        ...state,
        countries: ordered,
      };

    default:
      return state;
  }
}

export default rootReducer;
