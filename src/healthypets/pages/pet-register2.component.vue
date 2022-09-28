<template>
  <div class="registervet">

    <div class="logo1">
      <img src="src/assets/photovet1.png">
    </div>

    <div class="data">
      <h2 class="ml-4 mb-5" id="txtReg"></h2>

      <span class="p-float-label m-3">
        <pv-input-text id="kinds pet" type="text" v-model="kindspet" class="border-3"/>
        <label for="kinds pet">kinds pet</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="name"  type="text" v-model="name" class="border-3/"/>
        <label for="name" >Name</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="age" type="text" v-model="age" class="border-3"/>
        <label for="age">Age</label>
      </span>

      <div class="v-register">
        <pv-button label=" Check in " style="background-color: #ffa448; padding: 0px 150px; "
                   @click="registerVet"
        />
      </div>
    </div>


    <div class="logo2">
      <img src="src/assets/fhotovet2.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "register-pet.component"
}
</script>

<style scoped>

</style>