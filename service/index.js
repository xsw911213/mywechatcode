// 服务入口文件
let getToken = require('./api/get-token');


let services = [
  {
    path: '/getoken',
    fun: getToken
  }
]


module.exports = services;