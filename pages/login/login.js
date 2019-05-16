const {http} = require('../../utils/http.js')
const {app_id, app_secret} = getApp().globalData

Page({
    data: {},
    login(event) {
        let encrypted_data = event.detail.encryptedData
        let iv = event.detail.iv
        let code
        wx.login({
            success: (res) => {
                code = res.code
                http.post('/sign_in/mini_program_user', {
                    code,
                    iv,
                    encrypted_data,
                    app_id,
                    app_secret,
                })
                    .then(response => {
                        this.saveMessage(response)
                        wx.reLaunch({ url: "/pages/home/home" })
                    })
            }
        })
    },
    saveMessage(response){
        wx.setStorageSync('me', response.data.resource)
        wx.setStorageSync('X-token', response.header["X-token"])
    }

})
