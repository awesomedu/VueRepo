<template>
  <div id="app">
    {{msg}}
    <v-home></v-home>
  </div>
</template>

<script>
import Home from './comp/Home.vue'
import News from './comp/News.vue'
 

export default {
  data(){
    return {
      msg:'app 头部'
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
  text-align:center;
  color:red;
}
</style>
