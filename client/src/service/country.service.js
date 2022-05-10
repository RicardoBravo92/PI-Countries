import axios from "axios";

//const API_URL = "http://localhost:3001/countries";
const API_URL = process.env.REACT_APP_BACKEND + "/countries";

const getCountrybyId =  (id) => {
  return  axios.get(API_URL+"/"+id);
};


const getCountries = (name) => {
  return axios.get(API_URL+"?name="+name);
};

const UserService = {
  getCountrybyId,
  getCountries,
};

export default UserService;