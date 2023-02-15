<script setup>
    import {ref, reactive} from "vue";
    import { useSongsStore } from '../stores/songs';

    const songStore = useSongsStore();

    const newSong = ref("");

    const addSong = () => {
        songStore.addSong(newSong.value);
        console.log(songStore.mySongs);

        newSong.value = "";
    }

    const emptySongsArray = () => songStore.emptySongsArray();
</script>

<template>
    <h1>Hello</h1>
    <div class="empty-song-div" v-if="songStore.mySongs.length === 0">
        <p>Todavía no hay canciones en la store</p>
    </div>
    <div class="song-div" v-else>
        <ul>
            <li v-for="(song, index) in songStore.mySongs" :key="index">{{ }}</li>
        </ul>

    </div>
    <label for="song-name"></label>
    <input type="text" name="song-name" id="song-name" placeholder="Enter a Song" v-model="newSong">

    <button @click="addSong">Add Song</button>
    <button @click="emptySongsArray">Remove all Songs</button>
</template>

<style scoped>

div .song-div{
    padding: 2rem;
    background: lightblue;
    color: black;
    font-size: 2em;
}
div .empty-song-div{
    font-size: 2em;
}
div .song-input-div{
    padding: 2rem;
    background: bisque;
}
div .song-input-div input{
    padding: 1rem;
    width: 100%;
    font-size: 1.5em;
    border-radius: 16px;
}
</style>