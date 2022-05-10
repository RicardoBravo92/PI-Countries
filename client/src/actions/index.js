import CountryService from "../service/country.service";
import ActivityService from "../service/activity.service";
import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_ORDER,
  POST_ACTIVITY,
  SET_PAGE,
  FILTER_BY_CONTINENT,
} from "../constants";

export const getCountries = (name) => {
  return async function (dispatch) {
    const countries = await CountryService.getCountries(name?name:"");
    return dispatch({
      type: GET_COUNTRIES,
      payload: countries.data,
    });
  };
};


export const getCountryById = (id) => {
  return async function (dispatch) {
    const country = await CountryService.getCountrybyId(id);
    return dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: country.data,
    });
  };
};
export const filterCountryByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload:payload
  };
};

export const postActivities = (data) => {
  return async function (dispatch) {
    const activity = await ActivityService.AdActivity(data);
    return dispatch({
      type: POST_ACTIVITY,
      payload: activity.data,
    });
  };
};

export const setOrder = (payload) => {
  return {
    type: SET_ORDER,
    payload: payload,
  };
};

export const setPage = (payload) => {
  return {
    type: SET_PAGE,
    payload: payload,
  };
};

