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
  <div class="pt-10 pb-5 px-20">
      <div class="flex justify-center flex-col px-4 py-16">
        <h1 class="text-center text-4xl font-bold">Features</h1>
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-2xl font-bold py-5">Characters</h1>
          <router-link :to="{name: 'index.character'}">See All</router-link>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <!-- Card -->
          <div class="card w-52 h-auto card-compact bg-gray-800 shadow-xl">
            <figure><img class="w-full h-full object-cover" src="https://cdn.marvel.com/content/1x/3dman442.jpg" alt="Movie"/></figure>
            <div class="card-body">
              <h2 class="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div class="card w-52 h-auto card-compact bg-gray-800 shadow-xl">
            <figure><img class="w-full h-full object-cover" src="https://cdn.marvel.com/content/1x/triathlon.jpg" alt="Movie"/></figure>
            <div class="card-body">
              <h2 class="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div class="card w-52 h-auto card-compact bg-gray-800 shadow-xl">
            <figure><img class="w-full h-full object-cover" src="https://cdn.marvel.com/content/1x/354alk_com_crd_01.png" alt="Movie"/></figure>
            <div class="card-body">
              <h2 class="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div class="card w-52 h-auto card-compact bg-gray-800 shadow-xl">
            <figure><img class="w-full h-full object-cover" src="https://cdn.marvel.com/content/1x/354alk_com_crd_01.png" alt="Movie"/></figure>
            <div class="card-body">
              <h2 class="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div class="card w-52 h-auto card-compact bg-gray-800 shadow-xl">
            <figure><img class="w-full h-full object-cover" src="https://cdn.marvel.com/content/1x/354alk_com_crd_01.png" alt="Movie"/></figure>
            <div class="card-body">
              <h2 class="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <!-- Card -->
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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
