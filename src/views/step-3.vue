<template>
    <div class="form-step__wrap">
        <div class="form-step__group">
            <div class="select">
                <p class="select__label"> From Where did you hear about us </p>
                <div :class="selectOption">
                    <span class="select__title" @click="changeSelection" v-if="getData.selectOptionName===''">-- Choose anwser --</span>
                    <span class="select__title" @click="changeSelection" v-else>{{ getData.selectOptionName }}</span>
                    <div class="select__options" v-if="showSelection">
                        <div class="option__item" @click="clickSelection('Friend')"> Friend</div>
                        <div class="option__item" @click="clickSelection('Facebook')"> Facebook</div>
                        <div class="option__item" @click="clickSelection('Website')"> Website</div>
                    </div>
                </div>
                <p :class="selectionForm" v-if="getData.statusOptionName===''">The field is required!</p>
            </div>
            <div class="check-term">
                <input type="checkbox" id="check-term">
                <label for="check-term">I accept terms &amp; conditions</label>
                <p :class="checkBox" v-if="showErrorBox===''">The field is required!</p>
            </div>
        </div>
    </div>
</template>

<script>
import titles from "@/utils/config";

export default {
    name: "step-3",
    data: function () {
        return {
            showSelection: '',
            data: '',
            style: '',
            showErrorBox: 'show'
        }
    },
    created() {
        this.$store.commit('setProgressContent', 100)
        this.$store.commit('getTitleSteps', titles)
        this.$store.commit('getNumberStep', 3)
    },
    computed: {
        getData() {
            return this.$store.state.formStep3
        },
        selectOption() {
            if (this.getData.statusOptionName === '' && this.getData.style === '') {
                return 'select__wrap error'
            }
            return 'select__wrap'
        },
        selectionForm() {
            if (this.getData.statusOptionName === '') {
                return 'select__error'
            }
        },
        checkBox() {
            if (this.showErrorBox === '') {
                return 'check-term__error'
            }
        },
    },
    methods: {
        changeSelection() {
            if (this.showSelection === '') {
                this.showSelection = 'show'
            } else {
                this.$store.commit('changeSelect', [this.data, this.style])
                this.showSelection = ''
            }
        },
        clickSelection(value) {
            this.data = value
            this.style = 'invalid'
            this.$store.commit('changeSelect', [value, 'invalid'])
            this.showSelection = ''
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
