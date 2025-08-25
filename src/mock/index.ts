import request from '@/utils/request/index';
import AxiosMockAdapter from 'axios-mock-adapter';
import { routeConfig } from '@/router/routes';

const mock = new AxiosMockAdapter(request.instance, { delayResponse: 500 });

// 登录
mock.onPost('/login').reply((config: any) => {
    const { username, password } = JSON.parse(config.data);

    if (username === 'luo' && password == 9527) {
        return [
            200,
            {
                code: 200,
                message: '登录成功',
                data: {
                    id: 1,
                    name: 'luo-管理员',
                    token: '12132',
                    routes: routeConfig
                }
            }
        ];
    } else {
        return [400, { code: 400, message: '参数错误' }];
    }
});
