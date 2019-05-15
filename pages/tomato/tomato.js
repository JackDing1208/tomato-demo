// pages/tomato/tomato.js
Page({

    data: {
        time: 100,
        text: '',
        timer: null,
        clockStatus: 'stop',
        abandonConfirmVisible: false
    },


    onShow: function () {
        this.showTime()
        this.setTimer()
    },
    showTime() {
        let min = (parseInt(this.data.time / 60) < 10) ? '0' + parseInt(this.data.time / 60) : parseInt(this.data.time / 60)
        let sec = (parseInt(this.data.time % 60) < 10) ? '0' + parseInt(this.data.time % 60) : parseInt(this.data.time % 60)
        this.setData({text: min + ':' + sec})
        console.log(this.data.time);
    },

    setTimer() {
        if (this.data.clockStatus === 'stop' && this.data.time !== 0) {
            this.setData({clockStatus: 'tick'})
            this.data.timer = setInterval(() => {
                this.data.time -= 1
                this.showTime()
                if (this.data.time === 0) {
                    this.clearTimer()
                }
            }, 1000)
        }
    },
    clearTimer() {
        if (this.data.clockStatus === 'tick') {
            clearInterval(this.data.timer)
            this.data.timer = null
            this.setData({clockStatus: 'stop'})
            console.log('kill timer')
        }
    },
    showConfirm() {
        this.setData({abandonConfirmVisible: true})

    },
    hideConfirm() {
        this.setData({abandonConfirmVisible: false})

    },
    confirmAbandon() {
        wx.navigateBack({to: -1})
        if (this.data.clockStatus === 'tick') {
            this.clearTimer()
        }
    }
})
