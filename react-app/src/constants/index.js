let BASE_URL;
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://spair.greatwebtech.cn';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://spair.greatwebtech.cn';
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http://spair.greatwebtech.cn';
}
export default {
  baseURL: 'http://spair.greatwebtech.cn',
  BASE_URL: BASE_URL,
};
