const app = getApp()
const {host, t_app_id, t_app_secret} = app.globalData

const ajax = (method, url, data) => {     //封装自己的ajax请求
    let header = {
        "t-app-id": t_app_id,
        "t-app-secret": t_app_secret
    }

    if (wx.getStorageSync('X-token')) {    //相当于cookie
        header["Authorization"] = `Bearer ${wx.getStorageSync('X-token')}`
    }
    return new Promise((resolve, reject) => {
            wx.request({                      //微信发请求的API
                header,
                method,
                data,
                url: `${host}${url}`,
                dataType: 'json',
                success(response) {
                    let statusCode = response.statusCode
                    if (statusCode === 401) {
                        alert('登录失效')
                        // wx.redirectTo({ url: "/pages/login/login" })
                    } else {
                        resolve(response)
                    }
                },
                fail(errors) {
                    wx.showToast({title: '请求失败', icon: 'none'})
                    reject(errors)
                }
            })
        }
    )
}


const http = {
    get(url, data) {
        ajax('GET', url, data)
    },
    post(url, data) {
        ajax('POST', url, data)
    },
    put(url, data) {
        ajax('PUT', url, data)
    },
    delete(url, data) {
        ajax('DELETE', url, data)
    },

}

module.exports = {
    http, ajax
}
