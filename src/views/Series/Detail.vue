<template>
    <div v-for="(seriesDetail,index) in seriesDet" :key="index">
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img :src="seriesDetail.thumbnail.path+'.'+seriesDetail.thumbnail.extension" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">{{ seriesDetail.title }}</h1>
                    <p class="py-6">{{ seriesDetail.description || "No Have Description" }}</p>
                    <p class="text-xs">{{ seriesDetail.startYear }} - {{ seriesDetail.endYear }}</p>
                    <p class="text-xs">Last Modified {{ seriesDetail.modified }}</p>
                    <div v-if="seriesDetail.type" class="badge badge-info text-black font-bold">{{seriesDetail.type}}</div>
                </div>
            </div>
        </div>

        <div class="px-10 md:px-20 py-10 flex flex-col gap-3">
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
                <div class="collapse-title text-xl font-medium">
                    Comics
                </div>
                <div class="collapse-content"> 
                    <p v-for="(creators,index) in seriesDetail.comics.items" :key="index">
                        {{creators.name}}
                    </p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
                <div class="collapse-title text-xl font-medium">
                    Creators
                </div>
                <div class="collapse-content"> 
                    <p v-for="(creators,index) in seriesDetail.creators.items" :key="index">
                        {{creators.name}}
                        <span class="text-black font-bold badge badge-sm badge-info">{{creators.role}}</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
export default {
    setup(){
        const seriesDet = ref([])
        const route = useRoute()
        const id = route.params.id

        onMounted(() => {
            axios.get(`http://gateway.marvel.com/v1/public/series/${id}?apikey=${process.env.VUE_APP_API_KEY}&ts=${process.env.VUE_APP_TS}&hash=${process.env.VUE_APP_HASH}`)
            .then((result) => {
                seriesDet.value = result.data.data.results
            }).catch((err) => {
                console.log(err);
            })
        })

        return {
            seriesDet
        }
    }
}
</script>