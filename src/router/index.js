import Vue from 'vue'
import VueRouter from 'vue-router'
import master from "@/views/master";
import step1 from "@/views/step-1";
import step2 from "@/views/step-2";
import step3 from "@/views/step-3";


Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: master,
        children: [
            {
                path: '',
                component: step1
            },
            {
                path: 'step-2',
                component: step2
            },
            {
                path: 'step-3',
                component: step3
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
