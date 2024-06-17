<template>
   <div class="hero min-h-screen">
    <img src="../../assets/heroC.jpg" alt="" srcset="">
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">All Characters Page</h1>
        <p class="mb-5">This app made for marvels enthusiast</p>
      </div>
    </div>
  </div>

  <div class="pt-10 pb-5 sm:px-20 px-5">
    <div class="flex justify-center flex-col px-4 py-16">

        <h1 class="text-center text-4xl font-bold pb-10">All Chacarters</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="card lg:w-52 md:w-48 sm:w-44 w-auto h-auto overflow-hidden card-compact bg-gray-800 shadow-xl" v-for="(characters, index) in character" :key="index">
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

        <div class="flex justify-center flex-row items-center gap-2 px-4 py-16">
            <button class="btn btn-info" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button class="btn btn-info" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>

    </div>
  </div>
</template>

<style scoped>
  .hero img {
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
        const character = ref([]);
        const currentPage = ref(1);
        const offset = ref(0);
        const totalPages = ref(0);
        const limit = ref(10)

        onMounted(() => {
            axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${process.env.VUE_APP_API_KEY}&ts=${process.env.VUE_APP_TS}&hash=${process.env.VUE_APP_HASH}&offset=${offset.value}&limit=${limit.value}`).then((result) => {
                character.value = result.data.data.results
                totalPages.value = Math.ceil(result.data.data.total / limit.value)
            }).catch((err) => {
                console.log(err);
            })
        })

        const nextPage = () => {
            offset.value += limit.value 
            currentPage.value++
            fetchCharacters()
        }

        const prevPage = () => {
            offset.value -= limit.value
            currentPage.value--
            fetchCharacters()
        }

        const fetchCharacters = () => {
            axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${process.env.VUE_APP_API_KEY}&ts=${process.env.VUE_APP_TS}&hash=${process.env.VUE_APP_HASH}&limit=${limit.value}&offset=${offset.value}`).then((result) => {
                character.value = result.data.data.results;
            }).catch((err) => {
                console.log(err);
            })
        }

        return {
            character,
            currentPage,
            totalPages,
            nextPage,
            prevPage
        }
    }
}

</script>