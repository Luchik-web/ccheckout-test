import vue from '@vitejs/plugin-vue';
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

export default {
    resolve: {
        alias: {
            process: 'process/browser',
            stream: 'stream-browserify',
            zlib: 'browserify-zlib',
            util: 'util',
            '@app-core': path.join(__dirname, './src/core'),
            'app-assets': path.join(__dirname, './src/assets'),
        },
    },
    plugins: [vue()],
};
