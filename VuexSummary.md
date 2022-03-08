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

