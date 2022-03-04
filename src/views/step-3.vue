<template>
  <div class="form-step__wrap">
    <div class="form-step__group">
      <div class="select">
        <p class="select__label"> From Where did you hear about us </p>
        <div class="select__wrap error">
          <span class="select__title">-- Choose anwser --</span>
<!--          <div class="select__options">-->
<!--            <div class="option__item"> Friend</div>-->
<!--            <div class="option__item"> Facebook</div>-->
<!--            <div class="option__item"> Website</div>-->
<!--          </div>-->
        </div>
        <p class="select__error">The field is required!</p>
      </div>
      <div class="check-term">
        <input type="checkbox" id="check-term">
        <label for="check-term">I accept terms &amp; conditions</label>
        <p class="check-term__error">The field is required!</p>
      </div>
    </div>
  </div>
</template>

<script>
import titles from "@/utils/config";

export default {
  name: "step-3",
  created() {
    this.$store.commit('setProgressContent',100)
    this.$store.commit('getTitleSteps',titles)
    this.$store.commit('getNumberStep',3)
  }
}
</script>

<style scoped>

</style>