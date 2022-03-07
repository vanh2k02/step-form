<template>
    <div class="form-step__wrap">
        <div class="form-step__group">
            <div class="form-control">
                <label for="company">Your Company Name</label>
                <input type="text" id="company" name="company" :class="checkErrorName" v-model="getData.companyName"
                       @input="changeName()" @blur="changeName()">
                <p class="message" v-if="getData.lengthCompanyName===0">The field is required!</p>
                <p class="message" v-else></p>
            </div>
            <div class="form-control">
                <label for="employees">Number of Employees</label>
                <input type="text" id="employees" name="employees" :class="checkErrorNumber" v-model="getData.number"
                       @input="changeNumber()" @blur="changeNumber()">
                <p class="message" v-if="getData.lengthNumber===0">The field is required!</p>
                <p class="message" v-if="getData.style">Should be a valid value!</p>
                <p class="message" v-else></p>
            </div>
        </div>
    </div>
</template>

<script>

import titles from "@/utils/config";

export default {

    name: "step-2",
    created() {
        this.$store.commit('setProgressContent', 67)
        this.$store.commit('getTitleSteps', titles)
        this.$store.commit('getNumberStep', 2)
    },
    computed: {
        getData() {
            return this.$store.state.formStep2
        },
        checkErrorName() {
            if (this.getData.lengthCompanyName === 0) {
                return 'error'
            }
        }, checkErrorNumber() {
            let pattern = /^[0-9]*$/;
            if (this.getData.lengthNumber === 0 || !this.getData.number.match(pattern)) {
                return 'error'
            }
        },
    },
    methods: {
        changeName() {
            if (this.getData.companyName.length === 0) {
                this.$store.commit('changeCompanyName', [this.getData.companyName, ''])
            } else {
                this.$store.commit('changeCompanyName', [this.getData.companyName, 'invalid'])
            }
        },
        changeNumber() {
            let pattern = /^[0-9]*$/;
            if (!this.getData.number.match(pattern)) {
                this.$store.commit('changeNumber', [this.getData.number, ''])
                this.getData.style = 'error'
            } else {
                this.$store.commit('changeNumber', [this.getData.number, 'invalid'])
                this.getData.style = ''
            }
        },
    }
}
</script>

<style scoped>

</style>
