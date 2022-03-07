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
            statusEmail: 'invalid',
        }, formStep2: {
            companyName: '',
            number: '',
            lengthCompanyName: 1,
            lengthNumber: 1,
            style: '',
            statusStep: ''
        },
        checkRouter: [
            {
                stepPath: '/',
                stepNext: 'step-2',
                statusBtn: 'a',
                statusEmail: '',
            },
            {
                stepPath: '/step-2',
                stepNext: 'step-3',
                statusName: '',
                statusEmail: '',
            }
        ]
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
            state.formStep1.name = data[0]
            state.formStep1.lengthName = data[0].length
            state.formStep1.statusName = data[1]
            state.checkRouter.statusBtn = data[1]
        },
        changeEmail(state, data) {
            state.formStep1.statusEmail = data[1]
            state.checkRouter.statusEmail = data[1]
            state.formStep1.email = data[0]
            state.formStep1.lengthEmail = data[0].length
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