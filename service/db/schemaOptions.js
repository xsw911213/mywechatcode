// users集合  数据模型
let user = {
  username: {type: String},
  password: {type: String},
  role: {type: String},
  name: {type: String},
  tel: {type: String},
  remark: {type: String}
}

// menu集合  数据模型
let menu = {
  role: {type: String},
  menu: {type: Array, default: []}
}

// baseInfo集合  数据模型
let baseInfo = {
  userid: {type: String},
  pageInfo: {type: Object,default: {
      tel:'',
      delivery: false,
      startTime: '',
      endTime:'',
      marked:'您的订单我们已经收到，费用将在您退房时一并结算。'
    }
  },
  roomList: {type: Array, default: []},
  printers: {type: Array, default: []},
  commodityList: {type: Array, default: []},
}

// order集合  数据模型
let order = {
  userid: {type: String},
  deal: {type:Boolean, default:false},
  room: {type: String},
  orderNum: {type: String},
  orderContent: {type: Object, default: {}},
}

//commodity集合  数据模型
// let commodity = {
//   userid: {type: String},
//   commodityList: {type: Array, default: []},
// }

let schemaOption = {
  user,
  menu,
  baseInfo,
  order,
  // commodity
}

module.exports = schemaOption;
