<template>
<div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <div class="lodaingbar" v-if="isLoading">
        <div class="w3-dark-grey w3-round-xlarge">
            <div class="w3-container w3-blue w3-round-xlarge" :style="{width: width + '%'}">{{width}}%</div>
        </div>
        <h4>Loading...</h4>
    </div>

    <div v-if="!isLoading">
    <q-btn class="q-btn" color="secondary" label="View all donors" @click="Search"/>
    <table >
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>SSN</th>
            <th>Number of Units</th>

        </tr>
        <tr v-for="(item, inx) in value" :key="inx">
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
            <td>{{ item[2] }}</td>
            <td>{{ item[3] }}</td>
        </tr>
    </table>
    </div>
    

</div>
</template>

<script>
export default {
    data() {
        return{
            donorsArray:[],
            donorsTotal: '',
            value:[],
            isLoading:false,
            width: 0
            
        }
    },
    methods: {

        async Search(){
            this.isLoading=true
            let data = await this.$M('GETTOTALDONOR^QDEMO')
            this.donorsTotal = data.donorsTotal
            
            let count = this.donorsTotal
            this.donorsArray = []
            for (let i=1; i < count; i++){ 
                let data = await this.$M("DONORLIST^QDEMO",{
                    donori: i
                })
                this.donorsArray.push(data.donors)
                this.width = Number.parseFloat(((i/count)*100)).toFixed(2)
            }
            console.log(this.donorsArray.length)
            
            let value1 = []
            this.value = []
            for (let i=0; i<this.donorsArray.length; i++){
                value1 = this.donorsArray[i].split(":");
                this.value.push(value1)

            }
            this.isLoading=false

        }
    }
}
</script>


<style lang="stylus" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 2rem; 
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.q-btn{
    margin-top: 1rem;
}
.lodaingbar{
    margin : 2rem;
}
</style>



