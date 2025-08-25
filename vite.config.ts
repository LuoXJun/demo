import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import cesium from 'vite-plugin-cesium';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        cesium(),
        AutoImport({
            imports: ['vue'],
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: 'Icon'
                })
            ],
            dts: 'src/types/autoImport.d.ts'
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    // <el-icon><i-ep-edit /></el-icon>
                    enabledCollections: ['ep']
                })
            ],
            dts: 'src/types/component.d.ts'
        }),
        Icons({
            autoInstall: true
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    base: './',
    define: {
        'process.env': {}
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use '@/styles/globalScss.scss' as *;`
            }
        }
    },
    server: {
        host: true,
        port: 3005,
        hmr: true,
        proxy: {
            '^/dev': {
                target: 'http://192.168.3.65:8808',
                secure: false,
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/dev/, '')
            }
        }
    }
});
