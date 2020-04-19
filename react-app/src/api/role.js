import SpairService from '@/utils/myService.js';

export const postRoleList = (role, data) => SpairService.post(role, data);
export const getRoleList = (role) => SpairService.get(role);
export const postRole = (role, data) => SpairService.post(role, data);
export const getRole = (role) => SpairService.getRole(role);
