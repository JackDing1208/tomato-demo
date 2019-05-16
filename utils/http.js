const app = getApp()
const { host, t_app_id, t_app_secret} = app.globalData

const ajax = (method,url,data)=>{
    let header = {
        "t-app-id": t_app_id,
        "t-app-secret": t_app_secret
    }
    if (wx.getStorageSync('X-token')){
        header["Authorization"] = `Bearer ${wx.getStorageSync('X-token')}`
    }
    return new Promise((resolve,reject)=>{
        wx.request({
            data,
            method,
            url: `${host}${url}`,
            header,
            dataType: 'json',
            success: (response) => {
                let statusCode = response.statusCode
                if (statusCode >= 400){
                    if (statusCode === 401){
                        wx.redirectTo({ url: "/pages/login/login" })
                    }
                    reject({ statusCode, response })
                } else {
                    resolve(response)
                }
            },
            fail: (errors) => {
                wx.showToast({ title: '请求失败', icon: 'none' })
                reject(errors)
            }
        })
    })
}

const http = {
    get: (url, params) => ajax('GET', url, params),
    post: (url, data) => ajax('POST',url, data),
    put: (url,data) =>  ajax('PUT',url, data),
    delete: (url, data) =>  ajax('DELETE', url, data)
}

module.exports = {
    http
}
