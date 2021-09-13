<template>
  <div>
<b-container class="bv-example-row bv-example-row-flex-cols">
  <div>
  <b-card  no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="data.image" alt="Image" class="rounded-4" style="max-height: 100%;"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="data.name">
          <b-card-text>
            <h2 style="font-size:24px;">ID: {{data.id}}</h2>
          </b-card-text>
                    <b-card-text>
            <h2 style="font-size:24px;">Status: {{data.status}}</h2>
          </b-card-text>
                    <b-card-text>
            <h2 style="font-size:24px;">Type: {{data.type}}</h2>
          </b-card-text>
                    <b-card-text>
            <h2 style="font-size:24px;">Gender: {{data.gender}}</h2>
          </b-card-text>
                    <b-card-text>
            <h2>Origin: {{data.origin.name}}</h2>
          </b-card-text>
          <b-button to="/">Home</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</b-container>

</div>
</template>


<script>

export default {
  name: 'Character',
  data(){
    return{
      types: [
          'text',
          'number',
          'email',
          'password',
          'search',
          'url',
          'tel',
          'date',
          'time',
          'range',
          'color'
        ]

    }
  },
      created() {
      let dataDB = JSON.parse(localStorage.getItem('character'));
      if(dataDB === null){
        this.data = []
      }
      else{
        this.data = dataDB
      }
  },
  methods: {
  },
}
</script>
