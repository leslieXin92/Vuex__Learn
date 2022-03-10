<template>
    <div>
        <h2>Count Component sum is：{{ sum }}</h2>
        <input type="text" v-model="name" @keyup.enter="addPerson" />
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Person',
    data () {
        return {
            name: ''
        }
    },
    computed: {
        sum () {
            return this.$store.state.countAbout.sum
        },
        personList () {
            return this.$store.state.personAbout.personList
        }
    },
    methods: {
        addPerson () {
            const newPerson = { id: new Date().getTime(), name: this.name }
            this.$store.commit('personAbout/ADD_PERSON', newPerson)
            this.name = ''
        }
    }
}
</script>

<style scoped>
h2 {
    color: red;
}
</style>