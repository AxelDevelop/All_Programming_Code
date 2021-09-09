

Vue.component('padre',{
    data() {
        return {
            numeroPadre:0,
            nombrePadre: ''
        }
    },
    template:
    `
    <div class="">
        <h3>componente padre: {{ numeroPadre }}</h3>
        <button @click="numeroPadre++">+</button>
        {{ nombrePadre }}
        <hijo :numero="numeroPadre" @nombrehijo="nombrePadre = $event"></hijo>
    </div>
    `,
});
