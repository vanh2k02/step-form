<template>
  <div class="form-step__btns">
    <button class="btn prev" @click="back()">Previous</button>
    <button class="btn next" @click="next()">Next</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Footer",
  methods: {
    next() {
      return router.push('/step-2')
    }, back() {
      return window.history.back()
    }
  },computed:{
  }
}
</script>

<style scoped>

</style>