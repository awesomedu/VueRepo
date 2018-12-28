<template>
    <div>
        <v-header></v-header>
        <h2>{{msg}}</h2>
        <button @click="run">click me</button>
    </div>
</template>


<script>
    import Header from './Header.vue'

    export default{
        data(){
            return {
                msg : "我是一个首页"
            }
        },
        methods:{
            run(){
                alert(this.msg);
            }
        },components:{
            'v-header':Header
        }
    }

</script>


<style scoped>
    h2{
        background:cyan;
        text-align:left;
    }

</style>