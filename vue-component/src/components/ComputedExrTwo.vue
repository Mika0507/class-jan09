<script setup>

    import { ref, reactive, computed } from "vue";

    const myWhatchlist = reactive([
        {
            title: 'Vox Machina',
            year: 2022,
            whereToWatch: 'Netflix',
        },
        {
            title: 'Vox Machina',
            year: 2022,
            whereToWatch: 'Netflix',
        },
        {
            title: 'Vox Machina',
            year: 2022,
            whereToWatch: 'Netflix',
        },
    ])

const watchOnNetflix = computed(() => {
    return myWhatchlist.filter((element) => element.whereToWatch.includes('Netflix'));
}) 

const title = ref('');
const year = ref('');
const whereToWatch = reactive({
    streamApp: []
});

const addSerie = () => {
    myWhatchlist.push({
        title: title.value,
        year: year.value,
        whereToWatch: whereToWatch.streamApp,
    })
}
</script>

<template>
    <h1>Exercise 2</h1>

    <div v-for="(movie, index) in myWhatchlist" :key="index">
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.year }}</h2>
        <ul>
            <li v-for="(item, index) in movie.whereToWacht" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
    <form>
        <input v-model="title" type="text">
        <input v-model="year" type="text">
        <label for=""></label>
        <input v-model="whereToWatch" type="text">
    </form>
</template>

<style scoped>

</style>
