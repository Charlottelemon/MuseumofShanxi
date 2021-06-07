// miniprogram/pages/details/details.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item1Url: './item1.jpg',
    item2Url: '../index/display2.jpg',
    pushUrl: './pushdown.png',
    windowWidth: wx.getSystemInfoSync().windowWidth,
    windowHeight: wx.getSystemInfoSync().windowHeight,
    top: 0,
    covercontent: '侯马盟书',
    title: '侯马盟书\n',
    introduce: '这是中国山西省侯马市秦村出土的玉片文物，数量共有5000余片。玉片上文字记载的是春秋战国时代各诸侯国或卿大夫之间，于订盟誓约中所记载的言词，因此称作"盟书"或"载书"。该文字属于春秋晋国官方文字，出现约在公元前550年。书写于玉石是中国现今考古发现最早的毛笔字，是山西博物院馆藏的十大国宝之一。',
    animationData: {}, //内容动画
    animationMask: {} //蒙板动画
  },

  onLoad: function() {
    this.animateTrans = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
 
    this.animateFade = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
  },
 
  // 显示
  showModal: function() {
    this.animateTrans.translateY(0).step()
    this.animateFade.opacity(1).step()
    this.setData({
      animationData: this.animateTrans.export(), //动画实例的export方法导出动画数据传递给组件的animation属性
      animationMask: this.animateFade.export()
    })
  },
 
  // 隐藏
  hideModal: function() {
    this.animateTrans.translateY(500).step()
    this.animateFade.opacity(0).step()
    this.setData({
      animationData: this.animateTrans.export(),
      animationMask: this.animateFade.export()
    })
  },

  pushdown:function(e){
    wx.pageScrollTo({
      scrollTop: this.data.windowHeight*0,
      duration: 200
    })
  }
})