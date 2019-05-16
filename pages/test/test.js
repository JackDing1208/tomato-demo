const {http,ajax} = require('../../utils/http.js')
const {app_id, app_secret} = getApp().globalData


Page({

  data: {
    text:"haha",
    open:true
  },
  switch(){
    this.data.open=!this.data.open
  },
  request(){
    ajax('GET','/sign_in/mini_program_user').then((res) => {
      console.log(res);
    })

  }
})
