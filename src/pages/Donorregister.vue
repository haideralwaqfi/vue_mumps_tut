<template>
<div class="q-pa-md" style="max-width: 600px">
    <div class="q-gutter-md">
        <div class="row">
            <div class="col">
                <q-input outlined v-model="firstName"  label="Enter Donor First Name" style="margin-bottom: 1rem" />
            </div>
            <div class="col" style="margin-left: 1rem;">
                <q-input outlined v-model="lastName"  label="Enter Donor Last Name" style="margin-bottom: 1rem" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input outlined type="number" v-model="ssn"  label="Enter Donor SSN" style="margin-bottom: 1rem" />
            </div>
            <div class="col-3" style="margin-left: 1rem">
                <q-input outlined type="number" min="1" onkeyup="if(this.value<0){this.value= this.value * -1}" v-model="unitNum"  label="Units" style="margin-bottom: 1rem" />
            </div>
        </div>
        <q-item tag="label" v-ripple>
        <q-item-section avatar top>
        <q-checkbox v-model="isDonor" val="1" color="cyan" />
        </q-item-section>
        <q-item-section>
        <q-item-label>Eligible</q-item-label>
        <q-item-label caption>
            This means that the new registed person is eligible to donat a blood unit
        </q-item-label>
        </q-item-section>
        </q-item>
        <q-btn color="secondary" label="Insert" @click="insertDonor"/> 

    </div>
</div>
    
</template>

<script>
export default {
    data() {
        return{
            firstName: '',
            lastName: '',
            ssn: '',
            isDonor: '1',
            unitNum: '', 
        }
    },
    methods: {
        async insertDonor(){
            let data = await this.$M("INSERTDONOR^QDEMO",{
                firstName: this.firstName,
                lastName: this.lastName,
                ssn: this.ssn,
                isDonor: this.isDonor,
                unitNum: this.unitNum
            })

        }

    }
    
}
</script>

<style scoped>

.fullName{
    background: black;
}

</style>