import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest(res=>{
      this.setData({
        classic:res
      })
    })
  },
  onLike (e) {
    let behavior = e.detail.behavior
    likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
  },
  onNext () {
    let index = this.data.classic.index
    classicModel.getClassic(index, '/next', (res)=>{
      this.setData({
        classic:res,
        latest:classicModel.isLatest(res.index),
        first:classicModel.isFirst(res.index)
      })
    })
  },
  onPrevious () {
    let index = this.data.classic.index
    classicModel.getClassic(index, '/previous', (res)=>{
      this.setData({
        classic:res,
        latest:classicModel.isLatest(res.index),
        first:classicModel.isFirst(res.index)
      })
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