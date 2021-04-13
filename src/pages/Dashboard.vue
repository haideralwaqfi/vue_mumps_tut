<template>
<div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card col-3">
      <q-card-section v-if="isLoading" class="bg-teal-4 text-white text-center">
        <q-spinner-pie
          color="dark"
          size="5em"
          
        />
        
      </q-card-section>       
      <q-card-section v-if="!isLoading" class="bg-teal-4 text-white">
        <div class="text-h6">Total number of patients</div>
        <div class="text-subtitle2">{{patientsTotal}}</div>
      </q-card-section>
    </q-card>

    <q-card class="my-card col-3">
      <q-card-section v-if="isLoading" class="bg-teal-4 text-white text-center">
        <q-spinner-pie
          color="dark"
          size="5em"
          
        />
        
      </q-card-section>       
      <q-card-section v-if="!isLoading" class="bg-teal-4 text-white">
        <div class="text-h6">Total number of Donors</div>
        <div class="text-subtitle2">{{donorsTotal}}</div>
      </q-card-section>
    </q-card>

    <q-card class="my-card col-3">
      <q-card-section v-if="isLoading" class="bg-teal-4 text-white text-center">
        <q-spinner-pie
          color="dark"
          size="5em"
          
        />
        
      </q-card-section>       
      <q-card-section v-if="!isLoading" class="bg-teal-4 text-white">
        <div class="text-h6">Total number of Units</div>
        <div class="text-subtitle2">{{unitsTotal}}</div>
      </q-card-section>
    </q-card>
    </div>

    <div class="container" style="display: inline-block; margin: 1rem">
        <q-input outlined v-model="ssn" @keydown.enter="ssnSearch" label="Enter Patient SSN" style="margin-bottom: 1rem" />
        <q-btn color="secondary" label="Search" @click="ssnSearch"/>
    <table v-if="ssnClicked">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number of Units</th>
            <th>Patient SSN</th>
        </tr>
        <tr>
            <td v-if="isLoadingTable">Lodaing...</td> <td v-if="!isLoadingTable">{{ firstName }}</td>
            <td v-if="isLoadingTable">Lodaing...</td> <td v-if="!isLoadingTable">{{ lastName }}</td>
            <td v-if="isLoadingTable">Lodaing...</td> <td v-if="!isLoadingTable">{{ numUnits }}</td>
            <td v-if="isLoadingTable">Lodaing...</td> <td v-if="!isLoadingTable">{{ dbssn }}</td>
        </tr>
    </table>
    </div>
    
  </div>
</template>


<script>
export default {
    data(){
        return {
            patientsTotal: '',
            donorsTotal: '',
            unitsTotal:'',
            isLoading:false,
            ssn: '',
            dbssn: '',
            firstName: '',
            lastName: '',
            numUnits: '',
            ssnClicked: false,
            isLoadingTable:true
        }
    },
    methods:{
        async ssnSearch(){
            this.ssnClicked = true
            this.isLoadingTable=true
            let data = await this.$M("DASHBOARDSEARCH^QDEMO",{
                ssn: this.ssn
                
            })
            this.isLoadingTable=false
            this.firstName = data.firstName
            this.lastName = data.lastName
            this.numUnits = data.numUnits
            this.dbssn = data.ssn
        }
    },
    async mounted(){
        this.isLoading=true
        let data = await this.$M('GETDASHBOARD^QDEMO')
        this.isLoading=false
        this.patientsTotal = data.patientsTotal
        this.donorsTotal = data.donorsTotal
        this.unitsTotal = data.unitsTotal

    },
    
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
</style>