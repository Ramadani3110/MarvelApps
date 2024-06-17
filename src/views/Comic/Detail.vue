<template>
    <div v-for="(comicDetail, index) in comicDet" :key="index">
        <div class="hero min-h-screen bg-base-200">
             <div class="hero-content flex-col lg:flex-row">
                 <img :src="comicDetail.thumbnail.path+'.'+comicDetail.thumbnail.extension" />
                 <div>
                     <h1 class="text-5xl font-bold">{{comicDetail.title}}</h1>
                     <p class="py-6">{{ comicDetail.description || "No Have Description" }}</p>
                     <p class="text-xs">Last Modified {{ comicDetail.modified }}</p>
                 </div>
             </div>
         </div>
         <div class="flex flex-col py-10 px-10 md:px-20 gap-4">
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
                <div class="collapse-title text-xl font-medium">
                    Series
                </div>
                <div class="collapse-content"> 
                    <p>
                        {{ comicDetail.series.name }}
                    </p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
                <div class="collapse-title text-xl font-medium">
                    Timeline
                </div>
                <div class="collapse-content"> 
                    <ul class="timeline timeline-vertical">
                        <li v-for="(time,index) in comicDetail.dates" :key="index">
                            <div class="timeline-start">{{time.date}}</div>
                            <div class="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                            </div>
                            <div class="timeline-end timeline-box">{{time.type}}</div>
                            <hr/>
                        </li>
                    </ul>
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
        const comicDet = ref([])
        const route = useRoute()
        const id = route.params.id

        onMounted(() => {
            axios.get(`http://gateway.marvel.com/v1/public/comics/${id}?apikey=${process.env.VUE_APP_API_KEY}&ts=${process.env.VUE_APP_TS}&hash=${process.env.VUE_APP_HASH}`)
            .then((result) => {
                comicDet.value = result.data.data.results
            }).catch((err) => {
                console.log(err)
            })
        })

        return { comicDet }
    }
}
</script>