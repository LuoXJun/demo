// import * as Cesium from 'cesium';
declare interface Window {
    BASE_URL: {
        devUrl: string;
        prodUrl: string;
    };
    TIME_OUT: number;
    luckysheet: luckysheet;
    Cesium: Cesium;
}

declare module 'luckyexcel';
