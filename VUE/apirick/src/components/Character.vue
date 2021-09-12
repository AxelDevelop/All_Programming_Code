<template>
  <div>
<b-container class="bv-example-row bv-example-row-flex-cols">
  <b-card
    overlay
    :img-src="data.image"
    style="max-width:400px"
    img-alt="Card Image"
    text-variant="white"
    :title="data.name"
    sub-title="Subtitle"
  >
    <b-card-text>
      <p>ID: {{data.id}}</p> 
    </b-card-text>
        <b-card-text>
      <p>Status: {{data.status}}</p> 
    </b-card-text>
        <b-card-text>
      <p>Type: {{data.type}}</p> 
    </b-card-text>
        <b-card-text>
      <p>Gender: {{data.gender}}</p> 
    </b-card-text>
        <b-card-text>
      <p>Origin: {{data.origin.name}}</p> 
    </b-card-text>

      <b-button to="/">Home</b-button>
  </b-card>

  <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="data.image" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
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
