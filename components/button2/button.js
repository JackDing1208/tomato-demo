Component({
  properties: {
    text: {
      type: String,
      value: ''
    }
  },
  data:{
    message:'我被点了'
  },
  methods: {
    click(){
      this.triggerEvent('click',this.data.message )
      console.log(1);
    }
  }
})
