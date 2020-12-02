const path =require('path');//输出路径
const HtmlPlugin =require('html-webpack-plugin');//html打包插件
// const { Template } = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//重新打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//分离css成独立文件
module.exports={
    //开发环境配置   production ：生产环境（线上）  development ：开发环境（开发）
    mode:'development',
    //入口文件配置
    entry:{
        index:'./src/index.js',
        main66:'./src/main.js',
    },
    //出口文件配置
    output:{
      //绝对路径
   path:path.resolve(__dirname,'dist'),
   filename:'[name].js'
    },
    //配置webpack 开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        open:true,
    },
    plugins:[
        new HtmlPlugin({
            Template:'./src/index.html',
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true
            },
            hash:true,
        }),
        new MiniCssExtractPlugin(
            {
                filename:'css/[name].css'
            }
        ),
        //每次构建先删除dist再重新打包
        new CleanWebpackPlugin(),
    ],
    //配置loader
    module:{
        rules:[
            {
                test:/\.css$/,//以.css结尾的文件
                // use:['style-loader','css-loader']//顺序不能变 从后向前去处理
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
}