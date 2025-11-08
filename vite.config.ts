import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],

    build: {
        chunkSizeWarningLimit: 600,

        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'react-vendor';
                        }

                        if (id.includes('i18next') || id.includes('react-i18next')) {
                            return 'i18n-vendor';
                        }

                        if (id.includes('chart.js')) {
                            return 'chart-vendor';
                        }

                        if (id.includes('lodash')) {
                            return 'lodash-vendor';
                        }

                        if (id.includes('dayjs')) {
                            return 'dayjs-vendor';
                        }

                        if (id.includes('@mui') || id.includes('antd')) {
                            return 'ui-vendor';
                        }

                        return 'misc-vendor';
                    }
                },

                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
            },
        },
    },
});