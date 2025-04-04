import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// const { resolve } = require('path');
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue()],
	server: {
		port: 5778
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		}
	},
	build: {
		outDir: 'lib',

		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'looplan-workflow',
			fileName: (format) => `looplan-workflow.${format}.js`
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue', 'axios'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
					axios: 'axios'
				},
			},
		},
	},
});
