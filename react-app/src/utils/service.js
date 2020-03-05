import axios from "axios";
import URL from "@/constants/index.js";

const instance = axios.create({
  baseURL: URL.baseURL,
  timeout: 1000
});
export const get = url => {
  return instance
    .get(url, {})
    .then(res => {
      return JSON.parse(decodeURIComponent(res.data));
    })
    .catch(error => {
      alert(error);
    });
};
