<template>
    <div> 
        <h2>{{msg}}</h2>
        <v-header></v-header>
        <ul>    
            <li>
                1111
            </li>
            <li>
                2222
            </li>
            <li>
                3333
            </li>
        </ul>
    </div>
</template>

<script>
    import Header from './Header.vue'

    export default{
        data (){
           return {
               msg:"新闻组件"
           }
        },
        components:{
            'v-header':Header
        }
    }

</script>