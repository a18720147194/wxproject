import {BookModel} from '../../models/book'
const bookModel = new BookModel()
Page({
  data: {
    books:[],
    seraching:false,
    more:false
  },
  onLoad: function (options) {
    bookModel.getHotList()
      .then(res=>{
        this.setData({
          books:res
        })
      })
  },

  onSearching () {
    this.setData({
      searching:true
    })
  },
  onCancel () {
    this.setData({
      searching:false
    })
  },
  onReachBottom () {
    this.setData({
      more:!this.data.more
    })
  }
})