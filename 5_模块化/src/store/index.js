// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 计数相关配置
const countOptions = {
    namespaced: true,
    actions: {
        incrementOdd (context, value) {
            if (context.state.sum % 2) {
                context.commit('INCREMENT', value)
            }
        },
        incrementWait (context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 800)
        }
    },
    mutations: {
        INCREMENT (state, value) {
            state.sum += value
        },
        DECREMENT (state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        name: 'yahoo',
        age: 23
    },
    getters: {
        sumTimes (state) {
            return state.sum * 10
        }
    }
}

// 人员相关配置
const personOptions = {
    namespaced: true,
    actions: {},
    mutations: {
        ADD_PERSON (state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { name: 'leslie', age: 23 }
        ]
    },
    getters: {}
}

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})