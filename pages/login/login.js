const {http} = require('../../utils/http.js')
const {app_id, app_secret} = getApp().globalData

Page({
    data: {},

    login(e) {      //先获取微信相关数据,再向自身服务器一起发请求
        let {encryptedData, iv} = e.detail
        let code
        wx.login({
            success(res){
                code=res.code
                console.log(encryptedData)
                console.log(iv);
                console.log(code);

                http.post('/sign_in/mini_program_user',{
                    code,
                    iv,
                    encryptedData,
                    app_id,
                    app_secret
                })
            }
        })

   }


})
