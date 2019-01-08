Page({
  data: {
    grids: [
      {
        gridsIndex:0,
        gourl:'/pages/index/ad/ad1/ad1',
        url:'/images/科学匹配.jpg'
      },
      {
        gridsIndex: 1,
        gourl:'/pages/index/ad/ad2/ad2',
        url:'/images/私人订制.jpg'
      },
       {
        gridsIndex: 2,
        gourl: '/pages/index/ad/ad3/ad3',
        url: '/images/关于我们.jpg'
      }, 
      {
        gridsIndex: 3,
        gourl: '/pages/index/ad/ad4/ad4',
        url: '/images/团队风采.jpg'
      }, 
      {
        gridsIndex: 4,
        gourl: '/pages/index/ad/ad5/ad5',
        url: '/images/情感教室.jpg'
      }, 
      {
        gridsIndex: 5,
        gourl: '/pages/index/ad/ad6/ad6',
        url: '/images/企业联谊.jpg'
      }
    ],
    imgUrls:  [
               '/images/banner_1.jpg',
               '/images/banner_2.jpg',
               '/images/banner_3.jpg',
               '/images/banner_4.jpg'
        ],
        indicatorDots:  true,
        interval:  5000,
        duration:  1000,
      menu: {
        imgUrls: [
           '/images/ds_lds_x.jpg',
            '/images/ds_lds_x.jpg',
            '/images/ds_lds_x.jpg',
            '/images/ds_lds_x.jpg',
            '/images/ds_lds_x.jpg',
            '/images/ds_lds_x.jpg',
            '/images/ds_lds_x.jpg',
            '/images/ds_lds_x.jpg',
            '/images/ds_lds_x.jpg',
          ],
          descs: [
            '名字',
            '名字',
            '名字',
            '名字',
            '名字',
            '名字',
            '名字',
            '名字',
            '名字'
            
          ]
        },
          goodslist:  [
                    {
                          id: "001",
                          imgUrl: '/images/ban001.jpg',
                          name: "塔罗占卜沙龙",
                          time: "2018-02-06",
                          place:"金紫荆咖啡厅"
                    },
                    {
                          id: "002",
                          imgUrl: '/images/ban001.jpg',
                          name: "塔罗占卜沙龙",
                          time: "2018-02-06",
                          place: "金紫荆咖啡厅"
                    },
                    {
                          id: "003",
                          imgUrl: '/images/ban001.jpg',
                          name: "塔罗占卜沙龙",
                          time: "2018-02-06", place: "金紫荆咖啡厅"
                    },
                    {
                          id: "004",
                          imgUrl: '/images/ban001.jpg',
                          name: "塔罗占卜沙龙",
                          time: "2018-02-06", place: "金紫荆咖啡厅"
                    },
                    {
                          id: "005",
                          imgUrl: '/images/ban001.jpg',
                          name: "塔罗占卜沙龙",
                          time: "2018-02-06", place: "金紫荆咖啡厅"
                    },
                    {
                          id: "006",
                          imgUrl: '/images/ban001.jpg',
                          name: "塔罗占卜沙龙",
                          time: "2018-02-06", place: "金紫荆咖啡厅"

                    },
                    {
                          id: "007",
                          imgUrl: '/images/ban001.jpg',
                          name: "塔罗占卜沙龙",
                          time: "2018-02-06", place: "金紫荆咖啡厅"
                    },
                    {
                          id: "008",
                          imgUrl: '/images/ban001.jpg',
                          name: "塔罗占卜沙龙",
                          time: "2018-02-06", place: "金紫荆咖啡厅"
                    }
      ],
          Expert: {
            imgUrls: [
              '/images/expert1.jpg',
              '/images/expert2.jpg',
              '/images/expert3.jpg'
          
            ],
            descs: [
              '李京专业资格：国家心理治疗师',
              '李敏珠海市心动力健康服务中心主任',
              '刘珈卉中国性学会性教育专委会副秘书长'
            ]
          },
        service : {
            imgUrls: [
              '/images/科学匹配 (1).jpg',
              '/images/科学匹配 (2).jpg',
              '/images/科学匹配 (3).jpg'
            ]
            }


  },

  peple: function () {
    wx.navigateTo({
      url: '/pages/intro/intro'
    })
  },

  list: function () {
    wx.navigateTo({
      url: '/pages/activity_list/detail/detail'
    })
  },

  pastButton: function () {

    wx.switchTab({
      url: '/pages/activity_list/activity_list'
    })
  },

  expert: function () {
    wx.navigateTo({
      url: '/pages/index/expert/expert'
    })
  },
/*
  ad1 : function() {
    wx.navigateTo({
      url: '/pages/index/ad/ad1/ad1'
    })
  } ,

  ad2: function () {
    wx.navigateTo({
      url: '/pages/index/ad/ad2/ad2'
    })
  } ,

  ad3: function () {
    wx.navigateTo({
      url: '/pages/index/ad/ad3/ad3'
    })
  } ,
  ad4: function () {
    wx.navigateTo({
      url: '/pages/index/ad/ad4/ad4'
    })
  } ,
  ad5: function () {
    wx.navigateTo({
      url: '/pages/index/ad/ad5/ad5'
    })
  } ,
  ad6: function () {
    wx.navigateTo({
      url: '/pages/index/ad/ad6/ad6'
    })
  } ,
  */
  onLoad: function () {
  },
  onReady:function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload:function () {

  }
})