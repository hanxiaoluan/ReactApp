import URL from '@/constants';
import axios from 'axios';
const BASE_URL = URL.BASE_URL;
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5 * 1000,
});
class SpairService {
  constructor(namespace) {
    this.namespace = namespace;
  }
  async list() {
    const res = await instance.get(`${this.namespace}`);
    return res.data || [];
  }
  async get(key) {
    const encodedKey = encodeURIComponent(key);
    const res = await instance.get(`${this.namespace}/${encodedKey}`);

    return res.data;
  }
  post(key, value) {
    const encodedKey = encodeURIComponent(key);
    /*  const data = JSON.stringify(value); */
    return instance.post(`${this.namespace}/${encodedKey}`, {
      value,
    });
  }
}
export default new SpairService('react-app');
