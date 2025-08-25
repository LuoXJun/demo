import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

declare global {
    interface ResponseDataType {
        code: string | number;
        message?: string;
        msg?: string;
        data?: any;
    }

    interface IbaseRequestConfig {
        requestIntercepter?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;

        responseIntercepter?: (
            res: AxiosResponse<ResponseDataType>
        ) => AxiosResponse<ResponseDataType>;

        requestIntercepterCatch?: (err: any) => any;

        responseIntercepterCatch?: (err: any) => any;
    }

    interface IbaseInstanceConfig extends AxiosRequestConfig {
        interceptors?: IbaseRequestConfig;
        /**是否显示全局加载框*/
        isLoading?: boolean;
        /**显示加载框时的文字*/
        loadingText?: string;
    }
}
