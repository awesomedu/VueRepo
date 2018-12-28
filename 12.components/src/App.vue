<template>
  <div id="app">
    {{msg}}
    <v-home></v-home>
    <hr>
    <br>
    <v-news></v-news>
  </div>
</template>

<script>
import Home from './comp/Home.vue'
import News from './comp/News.vue'
 

export default {
  data(){
    return {
      msg:'hello'
    }
  },
  components:{
    'v-home':Home,
    'v-news':News
  }
}
</script>

<style>
#app {
  
}
</style>
