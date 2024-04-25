const { defineConfig } = require('@vue/cli-service');
module.exports = {
	configureWebpack: {},
	filenameHashing: true,
	productionSourceMap: false,
	publicPath: './',
	transpileDependencies: true,
	lintOnSave: false,
	dev: {
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			//  配置多个代理
			'/qualityPlatform': {
				target: 'https://m.douban.com/rexxar',
				pathRewrite: {
					'^/qualityPlatform': '/',
				},
				changeOrigin: true,
			},
			'/api': {
				target: 'http://localhost:80', // 本地后端抛出的接口
				secure: false,
				pathRewrite: {
					// 路径重写
					'^/api': '/', // 替换target中的请求地址
				},
				changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
			},
		},
		host: '0.0.0.0',
		port: 8080,
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false,
	},
};
