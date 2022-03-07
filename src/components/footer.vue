<template>
  <div class="form-step__btns">
    <button class="btn prev" @click="back()">Previous</button>
    <button class="btn next" @click="next()">Next</button>
  </div>
</template>

<script>

export default {
  name: "Footer",
  created() {
    this.getPathName()
  },
  computed: {
    getDataStep() {
      return this.$store.state.checkRouter
    },
  },
  methods: {
    next() {
      this.getDataStep.some(item => {
        console.log(item.statusBtn)
        if (item.stepPath === this.getPathName()) {

          return this.$router.push(item.stepNext)
        }
        return
      })
    }, back() {
      if (this.getDataStep.stepPath === '1') {
        return window.history.back()
      }
      return window.history.back()
    },
    getPathName() {
      return this.$route.path
    }
  },
}
</script>

<style scoped>

</style>