var app = new Vue({
    el: '#app',
    data:{
        title:'Hola Mundo con Vue nice',
        kids: [
            {
            name:'nanzy', age: 12, 
            name:'pedro', age: 16, 
            name:'juan', age: 23
        }
    ],
        newKid: '',
        total: ''
    },
    methods:{
        addKid(){
            this.kids.push({
                name: this.newKid, age:0,
            });
            this.newKid= '';
        }
    },
    computed:{
        addKids(){
            this.total = 0;
            for(kid of this.kids){
                this.total += kid.age
            };
            return this.total;
        }
    }

})