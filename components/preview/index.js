
Component({
  properties: {
    classic: {
      type: Object,
      observer: function(newVal) {
        if (newVal) {
          var typeText = {
            100: "电影",
            200: "音乐",
            300: "句子"
          }[newVal.type]
        }
        this.setData({
          typeText
        })
      }
    }
  },
  data: {
    typeText:''
  },
  methods: {
    onTap:function(event){
      this.triggerEvent('tapping',{
        cid:this.properties.classic.id,
        type:this.properties.classic.type
      },{})
    }
  }
})