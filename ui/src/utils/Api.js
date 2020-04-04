import axios from "axios";

export default axios.create({
  baseURL: "/hh/",
  responseType: "json"
});