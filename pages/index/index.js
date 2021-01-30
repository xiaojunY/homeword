// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    cateList:[],
    goodsList:[]
  },
  onLoad: function (options) {
    this.getSwiperList();
    this.getCateList();
    this.getGoodsList();
  },
  // 获取轮播图数据
  getSwiperList(){
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result) => {
        console.log(result);
        this.setData({
          swiperList:result.data.message
        })
      }
    });
  },
  // 获取分类导航数据
  getCateList(){
    // request({url:"/home/catitems"})
    // .then((result)=>{
    //   this.setData({
    //     cateList:result
    //   })
    // })
    this.setData({
      cateList:[
        {
          "name": "每日签到",
          "id":1,
          "image_src": '/img/qiandao.png'
        },
        {
          "name": "停车缴费",
          "id":2,
          "image_src": '/img/tingchechang.png'
        },
        {
          "name": "积分查询",
          "id":3,
          "image_src": '/img/bonus-line.png'
        },
        {
          "name": "扫码积分",
          "id":4,
          "image_src": '/img/saoma.png'
        },
        {
          "name": "我的卡包",
          "id":5,
          "image_src": '/img/kabao.png'
        },
        {
          "name": "新人礼",
          "id":6,
          "image_src": '/img/liwu.png'
        }
      ]
    })

  },
  getGoodsList(){
    this.setData({
      goodsList:[
        {
            "goods_id":43986,
            "cat_id":5,
            "goods_name":"海信(Hisense)LED55MU9600X3DUC 55英寸 4K超高清量子点电视 ULED画质 VIDAA系统",
            "goods_price":13999,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_800x800.jpg",
            "goods_small_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg",
            "add_time":1516509864,
            "upd_time":1516509864,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43985,
            "cat_id":5,
            "goods_name":"海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面",
            "goods_price":6809,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_1_800x800.jpg",
            "goods_small_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_1_400x400.jpg",
            "add_time":1516509864,
            "upd_time":1516509864,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43984,
            "cat_id":5,
            "goods_name":"TCL电视 49P3",
            "goods_price":4699,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_800x800.jpg",
            "goods_small_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_400x400.jpg",
            "add_time":1516509849,
            "upd_time":1516509849,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43983,
            "cat_id":5,
            "goods_name":"Amoi夏新曲面电视机55英寸 4K全高清安卓系统智能语音无线WiFi网络 48/50蓝光夜晶3D数字彩电 家用超薄窄边",
            "goods_price":3078,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"",
            "goods_small_logo":"",
            "add_time":1516509839,
            "upd_time":1516509839,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43982,
            "cat_id":5,
            "goods_name":"TCL 65Q960C 65英寸 哈曼卡顿 人工智能 金属超薄 64位34核 4K+HDR 原色量子点 曲面电视（灰色）",
            "goods_price":9988,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000826147951_1_800x800.jpg",
            "goods_small_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000826147951_1_400x400.jpg",
            "add_time":1516509836,
            "upd_time":1516509836,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43981,
            "cat_id":5,
            "goods_name":"TCL 43C2 43英寸 4K·HDR 哈曼卡顿音响 34核超高清安卓智能LED电视（黑）",
            "goods_price":4517,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606020881_1_800x800.jpg",
            "goods_small_logo":"http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606020881_1_400x400.jpg",
            "add_time":1516509832,
            "upd_time":1516509832,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43980,
            "cat_id":5,
            "goods_name":"海信（Hisense）LED65E7CY 65英寸 4K曲面超高清 人工智慧语音 丰富影视教育资源",
            "goods_price":6399,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0070175200-000000000763892698_2_800x800.jpg",
            "goods_small_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0070175200-000000000763892698_2_400x400.jpg",
            "add_time":1516509829,
            "upd_time":1516509829,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43979,
            "cat_id":5,
            "goods_name":"东芝（TOSHIBA）55U6680C 55英寸 曲面4K超高清电视 液晶平板电视机",
            "goods_price":0,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image3.suning.cn/uimg/b2c/newcatentries/0070082592-000000000602606780_2_800x800.jpg",
            "goods_small_logo":"http://image3.suning.cn/uimg/b2c/newcatentries/0070082592-000000000602606780_2_400x400.jpg",
            "add_time":1516509822,
            "upd_time":1516509822,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43978,
            "cat_id":5,
            "goods_name":"TCL D55A930C 55英寸 HDR纤薄4K曲面 64位30核智能液晶电视机（黑）",
            "goods_price":3499,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image1.suning.cn/uimg/b2c/newcatentries/0070078570-000000000147821386_1_800x800.jpg",
            "goods_small_logo":"http://image1.suning.cn/uimg/b2c/newcatentries/0070078570-000000000147821386_1_400x400.jpg",
            "add_time":1516509816,
            "upd_time":1516509816,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        },
        {
            "goods_id":43977,
            "cat_id":5,
            "goods_name":"海信（Hisense）LED55E7CY 55英寸 4K曲面超高清 人工智慧语音 丰富影视教育资源",
            "goods_price":3799,
            "goods_number":100,
            "goods_weight":100,
            "goods_big_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0070175200-000000000763892692_2_800x800.jpg",
            "goods_small_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0070175200-000000000763892692_2_400x400.jpg",
            "add_time":1516509812,
            "upd_time":1516509812,
            "hot_mumber":0,
            "is_promote":false,
            "cat_one_id":1,
            "cat_two_id":3,
            "cat_three_id":5
        }
    ]
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})