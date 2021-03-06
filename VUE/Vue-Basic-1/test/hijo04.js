Vue.component('hijo',{
    template: 
    `
    <div class="">
        <h3>Componente hijo: {{ numero }}</h3>
        <h4>Nombre: {{ nombre }}</h4>
        <button @click="numero++">+</button>
    </div>
    `,
    props:['numero'],
    data() {
        return {
            nombre: 'Ignacio'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre)
    },
});
