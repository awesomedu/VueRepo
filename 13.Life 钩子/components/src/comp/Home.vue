<template>
    <div>
        <v-header></v-header>
        <h2>{{msg}}</h2>
        <button @click="run">click me</button>
        <v-life v-if="flag"></v-life>


        <br>

        <button @click="flag=!flag">挂载</button>
    </div>
</template>


<script>
    import Header from './Header.vue'
    import Life from './Life.vue'


    export default{
        data(){
            return {
                msg : "我是一个首页",
                flag:true
            }
        },
        methods:{
            run(){
                alert(this.msg);
            }
        },components:{
            'v-header':Header,
            'v-life':Life
        }
    }

</script>


<style scoped>
    h2{
        background:cyan;
        text-align:left;
    }

</style>