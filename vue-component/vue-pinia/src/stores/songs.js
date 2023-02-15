import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSongsStore = defineStore('songs', () => {
  
  const mySongs = reactive([])

  const addSong = (newSong) => mySongs.push(newSong); 

  const emptySongsArray = () => (mySongs.length = 0); 

  return { mySongs, addSong, emptySongsArray }
})
