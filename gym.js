const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM',
        tareas:[],
        nuesvaTarea: ''
    },
    methods: {
        agregarTarea: function(){
            /* Objetos del push: nombre, estado y toca dejarlo en false porque cuando la tarea se desarrolle
            debe empezar en falso, como de 0 en adelante */
            this.tareas.push({
                nombre: this.nuesvaTarea,
                estado: false    
            });             
            this.nuesvaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        falsaTarea: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    },
});
