## 1. Vuex简介

### 1.1 Vuex是什么

专门在Vue中实现集中式状态(数据)管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理(读/写)，也是一种组件间通信的方式，且适用于任意组件间通信。

### 1.2 什么时候用Vuex

1. 多个组件依赖于同一状态。
2. 来自不同组件的行为需要变更同一状态。

### 1.3 图解

全局事件总线实现多组件共享数据：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203072124816.png)

Vuex实现多组件共享数据：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203072125987.png)

### 1.4 github地址

https://github.com/vuejs/vuex

------

## 2. Vuex工作原理

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203080051941.png)

------

## 3. 搭建Vuex环境

安装：

```bash
npm i Vuex@3 // Vue2版本
npm i Vuex@4 // Vue3版本
```

src / store / index.js

```javascript
// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// actions 用于相应组件中的动作
const actions = {}

// mutations 用于操作数据
const mutations = {}

// state 用于储存数据
const state = {}

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

main.js：

```javascript
import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
```

------

## 4. 基本使用

### demo：

src / store / index.js：

```javascript
// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// actions 用于相应组件中的动作
const actions = {
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
}

// mutations 用于操作数据
const mutations = {
    INCREMENT (state, value) {
        state.sum += value
    },
    DECREMENT (state, value) {
        state.sum -= value
    }
}

// state 用于储存数据
const state = {
    sum: 0
}

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

Count组件：

```vue
<template>
    <div>
        <h2>Now count is {{ $store.state.sum }}</h2>
        <label for="select">number：</label>
        <select name="select" v-model.number="curCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="addNow">add now</button>
        <button @click="subNow">sub now</button>
        <button @click="addOdd">add odd</button>
        <button @click="addWait">add wait</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
    },
    mounted () {
        console.log(this);
    },
    methods: {
        addNow () {
            this.$store.commit('INCREMENT', this.curCount)
        },
        subNow () {
            this.$store.commit('DECREMENT', this.curCount)
        },
        addOdd () {
            this.$store.dispatch('incrementOdd', this.curCount)
        },
        addWait () {
            this.$store.dispatch('incrementWait', this.curCount)
        }
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>
```

