<template>
  <div class="hero min-h-screen">
      <video
      autoplay
      loop
      muted
    >
      <source
        src="../assets/hero4k.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello</h1>
        <p class="mb-5">This app made for marvels enthusiast</p>
      </div>
    </div>
  </div>
  <div class="pt-10 pb-5 sm:px-20 px-5">

      <div class="flex justify-center flex-col px-4 py-16">

        <h1 class="text-center text-4xl font-bold">Features</h1>
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-2xl font-bold py-5">Characters</h1>
          <router-link :to="{name: 'index.character'}">See All</router-link>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <!-- Card -->
          <div class="card lg:w-52 md:w-48 sm:w-44 w-auto h-auto card-compact bg-gray-800 shadow-xl" v-for="(characters, index) in character" :key="index">
            <router-link :to="{name: 'detail.character',params: {id: characters.id}}"> 
              <figure>
                <img class="w-full h-full object-cover" :src="characters.thumbnail.path+'.'+characters.thumbnail.extension" alt="Character">
              </figure>
              <div class="card-body">
                <h2 class="card-title">{{characters.name}}</h2>
                <p class="line-clamp-1">{{characters.description}}</p>
              </div>
            </router-link>
          </div>
        </div>
        <!-- Card -->
      </div>
      
    <div class="flex justify-center flex-col px-4 py-16">

      <div class="flex flex-row items-center justify-between">
        <h1 class="text-2xl font-bold py-5">Comics</h1>
        <router-link :to="{name: 'index.comic'}">See All</router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div class="card lg:w-52 md:w-48 sm:w-44 w-auto h-auto card-compact bg-gray-800 shadow-xl" v-for="(comics, index) in comic" :key="index">
          <router-link :to="{name: 'detail.comic',params: {id: comics.id}}"> 
            <figure>
              <img class="w-full h-full object-cover" :src="comics.thumbnail.path+'.'+comics.thumbnail.extension" alt="Character">
            </figure>
            <div class="card-body">
              <h2 class="card-title">{{comics.title}}</h2>
              <p class="line-clamp-1">{{comics.description}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="flex justify-center flex-col px-4 py-16">

      <div class="flex flex-row items-center justify-between">
        <h1 class="text-2xl font-bold py-5">Series</h1>
        <router-link :to="{name: 'index.series'}">See All</router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div class="card lg:w-52 md:w-48 sm:w-44 w-auto h-auto card-compact bg-gray-800 shadow-xl" v-for="(seriess, index) in series" :key="index">
          <router-link :to="{name: 'detail.series',params: {id: seriess.id}}"> 
            <figure>
              <img class="w-full h-full object-cover" :src="seriess.thumbnail.path+'.'+seriess.thumbnail.extension" alt="Character">
            </figure>
            <div class="card-body">
              <h2 class="card-title">{{seriess.title}}</h2>
              <p>{{ seriess.startYear }} - {{ seriess.endYear }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
  video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.5) contrast(1.2) grayscale(0.2);
}
</style>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup(){
    const character = ref([])
    const comic = ref([])
    const series = ref([])
    onMounted( () => {
      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${process.env.VUE_APP_API_KEY}&ts=${process.env.VUE_APP_TS}&hash=${process.env.VUE_APP_HASH}&limit=4`).then((result) => {
        character.value = result.data.data.results
      }).catch((err) => {
        console.log(err);
      })

      axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${process.env.VUE_APP_API_KEY}&ts=${process.env.VUE_APP_TS}&hash=${process.env.VUE_APP_HASH}&limit=4`).then((result) => {
        comic.value = result.data.data.results
      }).catch((err) => {
        console.log(err);
      })

      axios.get(`http://gateway.marvel.com/v1/public/series?apikey=${process.env.VUE_APP_API_KEY}&ts=${process.env.VUE_APP_TS}&hash=${process.env.VUE_APP_HASH}&limit=4`).then((result) => {
        series.value = result.data.data.results
      }).catch((err) => {
        console.log(err);
      })
      
    })
    return {
      character,
      comic,
      series
    }
  }
}
</script>
