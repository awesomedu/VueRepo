<template>
    <div id="life">
       {{msg}}

        <button @click="changeData()">改变msg</button>
    </div>

   
</template>


<script>
    export default{
        data(){
            return {
                msg : "生命周期组件"
            }
        }, 
        methods:{
            changeData(){
                this.msg = "改变内容";
            }
        },
        beforeCreate(){
            console.log ('创建完成');
        },

        beforeMount(){
            console.log ('模板编译之前');
        },

        mounted(){
            console.log ('模板完成');
        },

        beforeUpdate(){
            console.log ('数据更新之前');
        },

        beforeDestroy(){
            console.log('实例销毁之前');
        },

        destroyed(){
            console.log('实例销毁完成');
        }
       
    }

</script>


<style scoped>
    h2{
        background:brown;
        text-align:center;
    }

    #life{
        background:yellow;
        height:80px;
        text-align:center;
    }

    

</style>