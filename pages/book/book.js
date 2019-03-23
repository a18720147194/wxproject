import {BookModel} from '../../models/book'
const bookModel = new BookModel()

Page({
  data: {
    books:[],
    seraching:false,
    more:false,
    header:"header",
    change:false
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
  },
  onPageScroll(e){
    if(e.scrollTop>=80){
      if(this.data.header !== 'header ScrollSmall'){
        this.setData({
          header:'header ScrollSmall',
          change:true
        })
      }
    }else{
      if(this.data.header !== 'header ScrollBig' && this.data.change){
        this.setData({
          header:'header ScrollBig',
          change:false
        })
      }
    }
  }
})