import SpairService from '@/utils/myService.js';
export const getPermission = (key) => SpairService.get(key);
export const postPermission = (key, value) => SpairService.post(key, value);
