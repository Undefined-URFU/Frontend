import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr(), tsconfigPaths()],
    resolve: {
        alias: {
            api: '/src/api',
            app: '/src/app',
            assets: '/src/assets',
            components: '/src/components',
            constants: '/src/constants',
            hooks: '/src/hooks',
            models: '/src/models',
            stores: '/src/stores',
            styles: '/src/styles',
            utils: '/src/utils',
        },
    },
})
