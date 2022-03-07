<template>
    <div class="form-step__btns">
        <button class="btn prev" @click="back()" v-if="getPathName()!=='/step-3'">Previous</button>
        <button class="btn next" @click="next()" v-if="getPathName()!=='/step-3'">Next</button>
        <button class="btn prev" @click="reset()" v-if="getPathName()==='/step-3'">Reset</button>
        <button class="btn next" @click="send()" v-if="getPathName()==='/step-3'">Send</button>
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
        }, getDataStep1() {
            return this.$store.state.formStep1
        }, getDataStep2() {
            return this.$store.state.formStep2
        },
    },
    methods: {
        next() {
            this.getDataStep.some(item => {
                if (item.stepPath === this.getPathName() && item.statusName === 'invalid' && item.statusEmail === 'invalid') {
                    return this.$router.push(item.stepNext)
                }
                if (item.stepPath === this.getPathName() && item.statusName === '') {
                    this.$store.commit('setValidateName', 0)
                }
                if (item.stepPath === this.getPathName() && item.statusEmail === '') {
                    this.$store.commit('setValidateEmail', 0)
                }
            })
        }, back() {
            return window.history.back()
        },
        getPathName() {
            return this.$route.path
        },
        reset() {
            this.$router.push('/')
            window.history.go()
        },send() {

        }
    },
}
</script>

<style scoped>

</style>
