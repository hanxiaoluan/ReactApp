import SpairService from '@/utils/myService.js';

export const postUser = (user, data) => {
  return SpairService.post(user, data);
};
export const getUser = (user) => {
  return SpairService.get(user);
};
