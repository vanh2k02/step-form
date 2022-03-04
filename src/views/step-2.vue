<template>
  <div class="form-step__wrap">
    <div class="form-step__group">
      <div class="form-control">
        <label for="company">Your Company Name</label>
        <input type="text" id="company" name="company" :class="checkErrorName" v-model="setData.companyName"
               @input="changeName()">
        <p class="message" v-if="setData.lengthCompanyName===0">The field is required!</p>
        <p class="message" v-else></p>
      </div>
      <div class="form-control">
        <label for="employees">Number of Employees</label>
        <input type="text" id="employees" name="employees" :class="checkErrorNumber" v-model="setData.number"
               @input="changeNumber()">
        <p class="message" v-if="setData.lengthNumber===0">The field is required!</p>
        <p class="message" v-if="setData.style">Should be a valid value!</p>
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
    setData() {
      return this.$store.state.formStep2
    },
    checkErrorName() {
      if (this.setData.lengthCompanyName === 0) {
        return 'error'
      }
    }, checkErrorNumber() {
      let pattern = /^[0-9]*$/;
      if (this.setData.lengthNumber === 0 || !this.setData.number.match(pattern)) {
        return 'error'
      }
    },
  },
  methods: {
    changeName() {
      this.$store.commit('changeCompanyName', this.setData.companyName)
    },
    changeNumber() {
      let pattern = /^[0-9]*$/;
      this.$store.commit('changeNumber', this.setData.number)
      if (!this.setData.number.match(pattern)) {
        return this.setData.style = 'error'
      }
      this.setData.style = ''
    },
  }
}
</script>

<style scoped>

</style>