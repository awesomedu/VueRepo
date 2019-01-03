<template>
  <div id="app">
    {{msg}}
    <v-request></v-request>
    
  </div>
</template>

<script>
import Home from './comp/Home.vue'
import News from './comp/News.vue'
import Request from './comp/Request'
 

export default {
  data(){
    return {
      msg:'app 头部'
    }
  },
  components:{
    'v-home':Home,
    'v-news':News,
    'v-request':Request
  }
}
</script>

<style>
#app {
  text-align:center;
  color:red;
}
</style>
