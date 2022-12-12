var app=new Vue({
    el:'#app', //el refers the app id
    data:{
        counter:0 //counter initially 0
    },
    methods:{

        increment(){
            this.counter++
        },
        decrement(){
            if (this.counter<=0){  //creating condition for negative counter value
                this.counter=0
            }
            else{
                this.counter--
            }
        }

    }
})
