<template>
  <div class="form-step__wrap">
    <div class="form-step__title">
      <div :class="checkClassTitleStep.titleActive">
        <span class="number">1</span>
        <span class="text">About You</span>
      </div>
      <div :class="checkClassTitleStep.title">
        <span class="number">2</span>
        <span class="text">About your Company</span>
      </div>
      <div :class="checkClassTitleStep.titleSuccess">
        <span class="number">3</span>
        <span class="text">Finishing Up</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item-step",
  computed: {
    checkClassTitleStep() {
      return this.$store.state.titleStep
    }
  }
}
</script>

<style scoped>

</style>