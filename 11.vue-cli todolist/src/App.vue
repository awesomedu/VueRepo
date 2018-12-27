<template>
  <div id="app">
    <input id = "topInput" type="text" v-model="todo" @keydown="doAdd($event)"/>
    <button @click="doAdd">增加</button>
    <br>
    <h2>进行中</h2>
      <ul class="ullist">
        <li v-for="(item,key) in list" v-if="!item.checked" class = "listItem">
          <input class="checkInput" type=checkbox v-model="item.checked" @change="saveList()"/>{{item.title}} --- <button @click="removeData">删除</button>
        </li>
      </ul>
    <br>
    <h2>已完成</h2>
      <ul class="ullist">
        <li v-for="(item,key) in list" v-if="item.checked" class = "listItem">
          <input type=checkbox v-model="item.checked"  @change="saveList()"/>{{item.title}}<button @click="removeData">删除</button>
        </li>
      </ul>
  </div>
</template>

<script>

import storage from './model/storage.js'

export default {
  data(){
    return{
      todo:'', 
      list:[
        {
          title:'进行中',
          checked:false
        },
        {
          title:'已完成',
          checked:true
        }
      ]
    }
  },

  methods:{
    doAdd(event){
      //this.todo = '';
      console.log(event.keyCode);  
      if(event.keyCode == 13){
         if(this.todo.length == 0)
      {
        alert ("输入不能为空!");
        return;
      }
      this.list.push({
        title:this.todo,
        checked:false
      })      
      }
      storage.set('list',this.list);
    },
    removeData(key){
      this.list.splice(key,1);
      storage.set('list',this.list);
    },
    saveList(){
      storage.set('list',this.list);
    }
  },

  mounted(){
    var list = storage.get('list');
    if(list){
      this.list = list;
    }
  }
}
</script>

<style>
  button{
    width:80px;
    height:40px;
    font-size:17px;
    color:white;
    border-color:#2472c8;
    background:#2472c8;
  }

  #topInput{
    height:40px;
    border-color:#2472c8;
    font-size:20px;
    width:40%;
  }

  #list{
    list-style:none;
    background:yellow;
    padding:0px;
  }

  .listItem{
    margin:20px 20px 20px 20px;
  }

  li{
    background:#eee;
  }

  .ullist{
    padding:0;
  }  
</style>
