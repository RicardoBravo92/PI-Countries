import axios from "axios";

const API_URL = "http://localhost:3001/activity";
//const API_URL = process.env.REACT_APP_BACKEND + "/activity";

const AdActivity = (data) => {
  return axios.post(API_URL, data);
};


const ActivityService = {
  AdActivity,
};

export default ActivityService;