<template>
  <div class="form-step__wrap">
    <div class="form-step__group">
      <div class="form-control">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" :class="checkErrorName" v-model="setData.name" @input="changeName()">
        <p class="message" v-if="setData.lengthName===0">The field is required!</p>
        <p class="message" v-else></p>
      </div>
      <div class="form-control">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" :class="checkErrorEmail" v-model="setData.email"
               @input="changeEmail()">
        <p class="message" v-if="setData.lengthEmail===0">The field is required!</p>
        <p class="message" v-else-if="setData.style">The field must be email!</p>
        <p class="message" v-else></p>
      </div>
    </div>
  </div>
</template>

<script>

import titles from "@/utils/config";

export default {
  name: "step-1",
  created() {
    this.$store.commit('setProgressContent', 34)
    this.$store.commit('getTitleSteps', titles)
    this.$store.commit('getNumberStep', 1)
  },
  computed: {
    setData() {
      return this.$store.state.formStep1
    },
    checkErrorName() {
      if (this.setData.lengthName === 0) {
        return 'error'
      }
    }, checkErrorEmail() {
      if (this.setData.lengthEmail === 0) {
        return 'error'
      }
    },
  },
  methods: {
    changeName() {
      this.$store.commit('changeName', this.setData.name)
    },
    changeEmail() {

      let pattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/;
      this.$store.commit('changeEmail', this.setData.email)
      if (!this.setData.email.match(pattern)) {
        return this.setData.style = 'error'
      }
      this.setData.style = ''
    },
  }
}
</script>

<style scoped>

</style>