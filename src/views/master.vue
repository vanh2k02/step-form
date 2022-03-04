<template>
  <div class="form-step">
    <Progress/>
    <ItemStep/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Footer from "@/components/footer";
import Progress from "@/components/progress";
import ItemStep from "@/components/item-step";

export default {
  name: "master",
  components: {ItemStep, Progress, Footer},
}
</script>


<style scoped>

</style>