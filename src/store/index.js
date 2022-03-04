import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const storeData = {
    state: {
        valueProgressContent: 0,
        titleSteps: [],
        titleStep: {},
        formStep1: {
            name: '',
            email: '',
            lengthName: 1,
            lengthEmail: 1,
            style: '',
            statusName: '',
            statusEmail: ''
        }, formStep2: {
            companyName: '',
            number: '',
            lengthCompanyName: 1,
            lengthNumber: 1,
            style: '',
            statusStep: ''
        },
    },
    mutations: {
        setProgressContent(state, value) {
            state.valueProgressContent = value
        },
        getNumberStep(state, value) {
            state.titleSteps.forEach(key => {
                if (key.number === value) {
                    state.titleStep = key
                }
            })
        },
        getTitleSteps(state, data) {
            state.titleSteps = data
        },
        changeName(state, data) {
            state.formStep1.name = data
            state.formStep1.lengthName = data.length
        },
        changeEmail(state, data) {

            state.formStep1.email = data
            state.formStep1.lengthEmail = data.length
        },
        changeCompanyName(state, data) {
            state.formStep2.companyName = data
            state.formStep2.lengthCompanyName = data.length
        },
        changeNumber(state, data) {
            state.formStep2.number = data
            state.formStep2.lengthNumber = data.length
        }
    },
}
const store = new Vuex.Store(storeData)

export default store