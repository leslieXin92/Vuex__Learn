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

## 