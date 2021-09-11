<template>
      <div>
          <b-navbar toggleable="lg" type="dark" variant="info" >
          
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          
              <b-collapse  is-nav >
                <b-navbar-nav >
                    <b-nav-item to="/">Home</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
      </div>
</template>

<script >
export default ({
    name: 'Nav',
    data(){
        return{

        }
    }
})
</script>
