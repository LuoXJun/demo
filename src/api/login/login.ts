import request from '@/utils/request/index';

// 获取标签列表
export const loginApi = (data = {}) => {
    return request.post(`/login`, data);
};
