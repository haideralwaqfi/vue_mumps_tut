<template>
<div>
    <q-input outlined v-model="input" label="Simple Input Box" />
  <ul>
      <li v-for="item in data" :key="item">
          {{item}}
      </li>    
  </ul>

     <q-btn color="secondary" label="Send to Server and Get Data" @click="sendDataToServer"/>
  

  
      <q-input outlined v-model="firstname" label="First Name" />
      <q-input outlined v-model="lastname" label="Last Name" />
      <q-input outlined v-model="account" label="Account"  />

    <h1>Full Name:  {{result}} </h1>

    <q-btn color="secondary" label="Send to Server and Get Data" @click="sendDataToServer2"/>
  </div>
</template>
<script>

export default {
    data() {
        return {
            data:[],
            input:'',
            firstname:'',
            lastname:'',
            result:'',
            account:''
        }
    },
    methods:{
       async sendDataToServer(){
        let data = await this.$M('EXAMPLE1^QDEMO',{
            param: this.input
        })
       this.data = data.data
       },
       async sendDataToServer2(){
        let data2 = await this.$M('EXAMPLE2^QDEMO',{
            firstname: this.firstname,
            lastname: this.lastname,
            account: this.account
        })
       this.result = data2.result
       }
    }
}
</script>
