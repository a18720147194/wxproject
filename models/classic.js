import {HTTP} from '../util/http.js'
import { LikeModel } from './like.js';
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
    let key = nextOrPre == 'next' ?this._getKey(index+1):this._getKey(this.index-1)
    let classic = wx.getStorageSync(key)
    if(!classic){
      this.request({
        url:`classic/${index}/${nextOrPre}`,
        success:res=>{
          wx.setStorageSync(this._getKey(res.index),res)
          sCallback(res)
        }
      })
    }else{
      sCallback(classic)
    }
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
  _getKey (index) {
    return 'classic'+index
  }
  
}