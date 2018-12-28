<template>
    <div>
        <h2>{{msg}}</h2>
        <button @click="run">click me</button>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                msg : "这是头部组件"
            }
        },
        methods:{
            run(){
                alert(this.msg);
            }
        }
    }

</script>


<style scoped>
    h2{
        background:brown;
        text-align:center;
    }

</style>