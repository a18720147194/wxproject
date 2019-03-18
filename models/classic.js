import {HTTP} from '../util/http.js'
export class ClassicModel extends HTTP{
  getLatest (sCallback) {
    this.request({
      url:'classic/latest',
      success:res=>{
        sCallback(res)
        this._setLatestIndex(res.index)
      }
    })
  }
  getClassic (index, nextOrPre, sCallback) {
    this.request({
      url:'classic/'+index+nextOrPre,
      success:res=>{
        sCallback(res)
      }
    })
  }
  isFirst (index) {
    return index == 1 ? true : false
  }
  isLatest (index) {
    return index == this._getLatestIndex? true : false
  }
  _setLatestIndex (index) {
    wx.setStorageSync('latest', index)
  }
  _getLatestIndex () {
    return wx.getStorageSync('latest')
  }
}