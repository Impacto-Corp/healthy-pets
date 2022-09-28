<template>
  <Toolbar></Toolbar>
  <RouterView></RouterView>

  <main></main>
</template>



<script>
import Toolbar from "./healthypets/pages/toolbar.component.vue"

export default {
  components: {
    Toolbar,

  },

  data() {
    return {

    }
  }
}
</script>
<style>


body{
  background-image: url("/src/assets/Fondo1.png");

}
</style>







