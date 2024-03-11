// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'
import publicConfig from './public/default.config'

// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    alias: {
        '@': resolve(__dirname, '/')
    },
    imports: {
        dirs: [
            'composables',
            'composables/*/index.{ts,js,mjs,mts}',
            'composables/**'
        ]
    },
    modules: ['@pinia/nuxt', '@element-plus/nuxt'],
    elementPlus: {},
    css: ['~/assets/style/main.scss', 'element-plus/theme-chalk/display.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: publicConfig
    },
})
