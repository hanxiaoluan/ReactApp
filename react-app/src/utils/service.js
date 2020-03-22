import axios from 'axios';
import URL from '@/constants/index.js';
import { message } from 'antd';
let loading = null;
const SPAIR = URL.baseURL;
axios.interceptors.request.use(
  async config => {
    loading = message.loading({
      content: '请求中',
      duration: 0,
    });

    return config;
  },
  error => Promise.reject(error),
);
axios.interceptors.response.use(response => {
  message.destroy();
  if (response.status === 200 || response.status === 201)
    return Promise.resolve(response);
});
export default class SpairService {
  constructor(namespace) {
    this.namespace = namespace;
  }
  async get(key) {
    const res = (await axios.get(`${SPAIR}/${this.namespace}/${key}`)) || '';
    console.log(res);
    return decodeURIComponent(res.data);
  }
  post(key, value) {
    const encodedValue = encodeURIComponent(encodeURIComponent(value));
    return axios.get(`${SPAIR}/${this.namespace}/${key}/${encodedValue}`);
  }
}
