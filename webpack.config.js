
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const reslove = (src) =>{
  return path.resolve(__dirname,src)
}

module.exports = {
  //入口文件
  entry:'./src/index.ts',
  output:{
    //打包目录
    path:reslove('dist'),
    //打包文件名
    filename:'bundle.js',
    //告诉webpack不适用箭头函数
    environment:{
      arrowFunction:false
    }
  },
  mode:'development',
  //打包要是用哪个模块
  module:{
    //规则
    rules:[
      {
        //处理哪些文件
        test:/\.ts$/,
        //使用什么工具
        use:[
          //配置babel
          {
            loader:'babel-loader',
            options:{
              //设置预定义的环境
              presets:[
                [
                  "@babel/preset-env",
                  {
                    //要兼容的目标浏览器
                    targets:{
                      "chrome":"88",
                      "ie":"11"
                    },
                    //指定corejs版本
                    "corejs":"3",
                    //corejs按需增加在
                    "useBuiltIns":"usage"
                  }
                ]
              ]
            }
          },  
          'ts-loader'
        ],
        //排除依赖包
        exclude:/node-moudules/
      },
      {
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          {
            loader:'postcss-loader',
            options:{
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:'last 2 version'
                    }
                  ]
                ]
              }  
            }
          },
          'less-loader'
        ]
      }
    ]

  },

  //配置插件
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template:'./src/index.html',
    })
  ],

  resolve:{
    extensions:['.ts','.js']
  }

  
}