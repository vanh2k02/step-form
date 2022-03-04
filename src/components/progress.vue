<template>
  <div class="progress-border">
    <div class="progress-content" :style="{width:getProgressContent+'%'}">
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  computed:{
    getProgressContent() {
      return this.$store.state.valueProgressContent
    },
  }
}
</script>

<style scoped>

</style>