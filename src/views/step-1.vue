<template>
  <div class="form-step__wrap">
    <div class="form-step__group">
      <div class="form-control">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" :class="checkErrorName" v-model="getData.name" @input="changeName()"
               @blur="changeName">
        <p class="message" v-if="getData.lengthName===0">The field is required!</p>
        <p class="message" v-else></p>
      </div>
      <div class="form-control">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" :class="checkErrorEmail" v-model="getData.email"
               @input="changeEmail()" @blur="changeEmail">
        <p class="message" v-if="getData.lengthEmail===0">The field is required!</p>
        <p class="message" v-else-if="getData.style">The field must be email!</p>
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
    getData() {
      return this.$store.state.formStep1
    },
    checkErrorName() {
      if (this.getData.lengthName === 0) {
        return 'error'
      }
    }, checkErrorEmail() {
      if (this.getData.lengthEmail === 0 || !this.getData.statusEmail) {
        return 'error'
      }
    },
  },
  methods: {
    changeName() {
      if (this.getData.name.length === 0) {
        this.$store.commit('changeName', [this.getData.name, ''])
      }
      return this.$store.commit('changeName', [this.getData.name, 'invalid'])

    },
    changeEmail() {

      let pattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/;
      if (!this.getData.email.match(pattern)) {
        this.getData.style = 'error'
        this.$store.commit('changeEmail', [this.getData.email, ''])
      } else {
        this.getData.style = ''
        this.$store.commit('changeEmail', [this.getData.email, 'invalid'])
      }

    },
  }
}
</script>

<style scoped>

</style>