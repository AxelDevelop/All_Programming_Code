<template>
    <div class="mt-5">
        <h1>Formularios</h1>

        <form action="">
            <b-row>
                <b-col md="3">
                    <b-form-input :state="comprobar" id="input-1" type="text" placeholder="Enter text" v-model="text"></b-form-input>
                    <small>minimo 3 caracteres</small>
                    <p>Texto: {{text}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="select" :options="animals"></b-form-select>
                    <p>seleccion: {{select}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalsRadio"></b-form-radio-group>
                    <p>Radio: {{radio}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="animalsRadio"></b-form-checkbox-group>
                    <p>Radio: {{check}}</p>

                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            text:'',
            select:null,
            radio: null,
            check:[],
            animals:[
                {value: null, text:'Seleccione un animal',},
                {value:'perro', text:'guau',},
                {value: 'gato', text:'miau',},
                {value: 'cebra', text:'WTF?',}
            ],
            animalsRadio:[
                {value: null, text:'Seleccione un animal',},
                {value:'perro', text:'guau',},
                {value: 'gato', text:'miau',},
                {value: 'cebra', text:'WTF?',}
            ]
        }
    },
    computed: {
        comprobar(){
            return this.text.length > 2 ? true : false
        }
    },
}
</script>