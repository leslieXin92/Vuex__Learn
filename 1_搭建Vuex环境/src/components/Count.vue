<template>
    <div>
        <h2>Now count is {{ curCount }}</h2>
        <label for="select">number：</label>
        <select name="select" v-model="addCount">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="addNow">add now</button>
        <button @click="addOdd">add odd</button>
        <button @click="addWait">add wait</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data () {
        return {
            curCount: 0,
            addCount: 1
        }
    },
    methods: {
        addNow () {
            this.curCount += this.addCount
        },
        addOdd () {
            if (this.curCount % 2) {
                this.curCount += this.addCount
            }
        },
        addWait () {
            setTimeout(() => {
                this.curCount += this.addCount
            }, 1000)
        }
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>