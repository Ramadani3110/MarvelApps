<template>
  <Navbar/>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'navbar',
  components: {
    Navbar
  }
}
</script>
