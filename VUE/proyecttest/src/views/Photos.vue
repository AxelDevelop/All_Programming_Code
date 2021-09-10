<template>
    <div>
    <div>
        <h1>Photo Gallery</h1>

        <router-link :to="{ name: 'photos', params: {id : item} }" v-for="(item, index) of photoArray" :key="index">
            <button>photo {{ item }}</button>
        </router-link>
        <Photo/>

        <button @click="home">Home</button>
        <button @click="previous">Previous</button>
        <button @click="next">Next</button>
        
    </div>
    <div>
        {{posts}}
    </div>
    </div>
</template>

<script>

    import Photo from "@/components/Photography";

export default {
    name: 'Photos',
    components:{
        Photo
    },
    data() {
        return {
            photoArray: [1,2,3]
        }
    },
    methods: {
        home(){
            this.$router.push('/')
        },
        previous(){
            this.$router.go(-1)
        },
        next(){
            this.$router.go(1)
        },
    },
}
</script>

<style scoped>
    button{
        border: none;
        background: rgba(145, 145, 145, 0.479);
        font-size: 1em;
        padding: 10px;
        margin: 4px;
        border-radius: 10px;
        text-transform: capitalize;
        cursor: pointer;
        outline: none;
        transition-duration: .5s;
        transition-timing-function: ease;
    }
    button:active{
        transform: translate3d(10px, 5px , 0);

        transition-duration: .5s;
        transition-timing-function: ease;
    }
</style>