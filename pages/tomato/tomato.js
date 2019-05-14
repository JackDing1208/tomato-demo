// pages/tomato/tomato.js
Page({

    data: {
        time: 13,
        text:''
    },


    onShow: function () {
        this.showTime()

     let timer=setInterval(()=>{
            this.data.time -=1
            this.showTime()
            if(this.data.time===0){
                clearInterval(timer)
            }
        },1000)
    },
    showTime() {
        let min = (parseInt( this.data.time/60)<10)?'0'+parseInt( this.data.time/60):parseInt( this.data.time/60)
        let sec =  (parseInt( this.data.time%60)<10)?'0'+parseInt( this.data.time%60):parseInt( this.data.time%60)
        this.setData({text:min+':'+sec})
        console.log(this.data.time);
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */

})
