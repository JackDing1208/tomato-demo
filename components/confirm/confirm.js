Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    },
  },
  data: {
    text: ""
  },


  methods: {
    confirm(){
      this.triggerEvent('confirm', this.data.text)
    },
    cancel(){
      this.triggerEvent('cancel', this.data.text)
    },
    watchValue(event){
      this.data.text = event.detail.value
      console.log(this.data.text);
    }
  }
})
