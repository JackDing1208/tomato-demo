// pages/home/home.js
Page({

    data: {
        visibleCreateConfirm: false
    },

    confirmCreate(e) {
        console.log(e.detail);
        this.setData({visibleCreateConfirm: false})

    },
    hideCreateConfirm(e) {
        console.log(e.detail);
        this.setData({visibleCreateConfirm: false})
    },
    onclick(e){
        console.log(2);
        console.log(e.detail);
    },
    showCreateConfirm(e){
        console.log(e);
        this.setData({visibleCreateConfirm: true})

    }
})
