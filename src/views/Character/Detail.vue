<template>
    <div v-for="(chrDet,index) in characterDet" :key="index">
        <div class="hero min-h-screen bg-base-200">
             <div class="hero-content flex-col lg:flex-row" >
                 <img :src="chrDet.thumbnail.path+'.'+chrDet.thumbnail.extension" class="max-w-sm rounded-lg shadow-2xl" alt="picture"/>
                 <div>
                     <h1 class="text-5xl font-bold">{{ chrDet.name }}</h1>
                     <p class="py-6">{{ chrDet.description || 'Not Have Description' }}</p>
                 </div>
             </div>
        </div>
        <div class="px-10 md:px-20 py-10 flex flex-col gap-3">
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
                <div class="collapse-title text-xl font-medium">
                    Comics
                </div>
                <div class="collapse-content"> 
                    <p v-for="(cmc, index) in chrDet.comics.items" :key="index">{{cmc.name}}</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
                <div class="collapse-title text-xl font-medium">
                    Series
                </div>
                <div class="collapse-content"> 
                    <p v-for="(srs, index) in chrDet.series.items" :key="index">{{srs.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
export default{
    setup(){
        const characterDet = ref([]);
        const route = useRoute()
        const id = route.params.id;

        onMounted(() => {
            axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${process.env.VUE_APP_API_KEY}&ts=${process.env.VUE_APP_TS}&hash=${process.env.VUE_APP_HASH}`).then((result) => {
                characterDet.value = result.data.data.results
            }).catch((err) => {
                console.log(err);
            })
        })

        return {
            characterDet,
        }
    }
}
</script>