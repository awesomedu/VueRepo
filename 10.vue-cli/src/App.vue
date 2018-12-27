<template>
  <div id="app">
      <button @click="run1">run1</button>
      <button v-on:click="run2">run2</button>
      <button v-on:click="run3">get msg</button>
    


      {{msg}}
      <button v-on:click="run4">set msg</button>

      <ul> 
        <li v-for="(item,key) in list">
            {{key}}--{{item}}
        </li>
      </ul>

      <button v-on:click="run5">request Data</button>
      <button v-on:click="run6('deliverData')">delete Data</button>
      <button v-on:click="run7($event)">事件对象</button>


      
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'hello vue',
        list:[]
      }
    },
    methods:{
      run1:function(){
        alert('run 1')
      },

      run2:function(){
        alert('run 2')
      },

      run3:function(){
        alert(this.msg)
      },

      run4:function(){
        this.msg = "改变的数据"
      },

      run5:function(){
        for(var i = 0;i < 10; i ++)
        {
          this.list.push('我是'+i + '条数据');
        }
      },

      run6:function(val){
          alert(val);
      },

      run7:function(e){
          console.log(e);
      },
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
