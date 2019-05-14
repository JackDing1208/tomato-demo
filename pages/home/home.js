// pages/home/home.js
Page({

    data: {
        visible: true
    },

    confirm(e) {
        console.log(e.detail);
        this.setData({visible: false})

    },
    cancel(e) {
        console.log(e.detail);
        this.setData({visible: false})
    },
    onclick(e){
        console.log(2);
        console.log(e.detail);
    }
})
