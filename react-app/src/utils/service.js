import axios from "axios";
import URL from "@/constants/index.js";

const SPAIR = URL.baseURL;

export default class SpairService {
  constructor(namespace) {
    this.namespace = namespace;
  }
  async get(key) {
    const res = (await axios.get(`${SPAIR}/${this.namespace}/${key}`)) || "";
    return decodeURIComponent(res.data);
  }
  post(key, value) {
    const encodedValue = encodeURIComponent(encodeURIComponent(value));
    return axios.get(`${SPAIR}/${this.namespace}/${key}/${encodedValue}`);
  }
}
