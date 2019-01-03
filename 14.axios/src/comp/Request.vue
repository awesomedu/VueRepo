<template>
    <div>
        <h2>{{msg}}</h2>
        <button @click="request">click me</button>
         <ul>
        <li v-for="item in list">
            {{item.title}}
        </li>
    </ul>
    </div>
</template>


<script>
import Axios from 'axios'
    export default{
        data(){
            return {
                msg : "请求组件",
                list:[]
            }
        },
        methods:{
            request(){
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
                Axios.get(api).then((response)=>{
                    console.log(response);
                    this.list = response.data.result;
                }).catch((error)=>{
                    console.log(error);
                })       
            }
        }
    }

</script>


<style scoped>
    h2{
        background:brown;
        text-align:center;
    }

    ul{
        list-style:none;
        margin:0px;
        padding:0px;
        text-align:left;
    }

</style>