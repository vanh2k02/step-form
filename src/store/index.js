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
            lengthName: -1,
            lengthEmail: -1,
            style: '',
            statusName: '',
            statusEmail: 'invalid',
        }, formStep2: {
            companyName: '',
            number: '',
            lengthCompanyName: -1,
            lengthNumber: -1,
            style: '',
            statusCompanyName: '',
            statusNumber: '',
        }, formStep3: {
            selectOptionName: '',
            box: '',
            style: 'invalid',
            statusOptionName: 'show',
            statusBox: '',
        },
        checkRouter: [
            {
                stepPath: '/',
                stepNext: 'step-2',
                statusName: '',
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
            state.checkRouter[0].statusName = data[1]
        },
        changeEmail(state, data) {
            state.checkRouter[0].statusEmail = data[1]
            state.formStep1.email = data[0]
            state.formStep1.lengthEmail = data[0].length
        },
        changeCompanyName(state, data) {
            state.formStep2.companyName = data[0]
            state.formStep2.lengthCompanyName = data[0].length
            state.checkRouter[1].statusName = data[1]
        },
        changeNumber(state, data) {
            state.formStep2.number = data[0]
            state.formStep2.lengthNumber = data[0].length
            state.checkRouter[1].statusEmail = data[1]
        }, changeSelect(state, data) {
            state.formStep3.selectOptionName = data[0]
            state.formStep3.statusOptionName = data[1]
            state.formStep3.style = data[1]
        }, setValidateName(state, data) {
            if (state.formStep1.lengthName === -1) {
                return state.formStep1.lengthName = data
            }
            if (state.formStep2.lengthCompanyName === -1) {
                return state.formStep2.lengthCompanyName = data
            }
        }, setValidateEmail(state, data) {
            if (state.formStep1.lengthEmail === -1) {
                state.formStep1.lengthEmail = data
            }
            if (state.formStep2.lengthNumber === -1) {
                return state.formStep2.lengthNumber = data
            }
        }
    },
}
const store = new Vuex.Store(storeData)

export default store
