const app = new Vue({
    el:'#app',
    data:{
        task: [],
        newTask:''
    },
    methods: {
        addTask(){
            // console.log('diste click', this.newTask);
            this.task.push({
                name: this.newTask,
                state: false
            });
            this.newTask = '';
            localStorage.setItem('vue', JSON.stringify(this.task));
        },
        editTask(index){
            this.task[index].state = true;
            localStorage.setItem('vue', JSON.stringify(this.task));

        },
        deleteTask(index){
            this.task.splice(index,1);
            localStorage.setItem('vue', JSON.stringify(this.task));

        },
    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('vue'));
        
        console.log(datosDB);
        if(datosDB === null){
            this.task = [];
        }else{
            this.task = datosDB
        }
    }
});