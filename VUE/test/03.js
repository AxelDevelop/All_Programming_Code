const app = new Vue({
    el:'#app',
    data: {
        message: '',
        contador: 0
    },
    computed: {
        invertido(){
            return this.message.split('').reverse().join('');
        },
        color(){
            return {
                'bg-red-400' : this.contador < 10,
                'bg-yellow-400' : this.contador > 10 && this.contador < this.contador < 50,
                'bg-green-400' : this.contador > 50 && this.contador < this.contador < 100,
                'bg-green-700' : this.contador == 100 ,
            }
        }
    },
})