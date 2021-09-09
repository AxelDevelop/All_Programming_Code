<template>
    <div>
        <ul class="list-group">
            <li v-for="(fruit, index) of arrayOrder" :key="fruit.id" class="list-group-item d-flex justify-content-between align-items-start" @click="increment(index)">
                {{ index }} - {{ fruit.nombre }}
                <span class="badge bg-primary rounded-pill">{{ fruit.cantidad }}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-block" @click="reload">Eliminar</button>
    </div>
</template>


<script>

import {mapState, mapMutations} from 'vuex';

export default {
    name:'list',
    computed: {
        ...mapState(['fruits']),
        arrayOrder(state){
            return state.fruits.sort((a,b) =>
                b.cantidad - a.cantidad
            )
        }
    },
    methods: {
        ...mapMutations(['increment', 'reload'])
    },

}
</script>