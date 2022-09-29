<template>
  <div class="pet-register2">

    <div class="logo1">
      <img src="src/assets/photovet.png" >
    </div>

    <div class="data">
      <h2 class="ml-4 mb-5" id="txtReg"></h2>

      <span class="p-float-label m-3">
        <pv-input-text id="race" type="text" v-model="race" class="border-3"/>
        <label for="race">Race</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="name"  type="text" v-model="name" class="border-3/"/>
        <label for="name" >Name</label>
      </span>

      <div class="select-all">
        <input type="radio" name="sex"  id="male">
        <label for="male">Male</label>

        <input type="radio" name="sex"  id="female">
        <label for="female">Female</label>
      </div>

      <span class="p-float-label m-3">
        <pv-input-text id="age" type="text" v-model="age" class="border-3"/>
        <label for="age">Age</label>
      </span>

      <span class="p-float-label m-3">
        <a href="#" class="btn-ghost">Upload photo</a>
      </span>

      <div class="v-register">
        <pv-button label=" Check in " style="background-color: #ffa448; padding: 0 150px; "
                   @click="registerPet"
        />
      </div>
    </div>


    <div class="logo2">
      <img src="src/assets/fhotovet2.png" >
    </div>
  </div>
</template>

<script>
export default {
  name: "register-pet2.component",

  data(){
    return{
      race:'',
      name:'',
      sex:'',
      age:'',

      type:[
        {typePet:'Pet',code:'Pet'}
      ],

      Pet:[],
      PetList:[],
    }
  },

  methods:{
    registerPet(){
      this.PetList.push({
        race:this.race,
        name:this.name,
        sex:this.sex,
        age:this.age,

      })

      console.log(this.PetList)

      this.race='';
      this.name='';
      this.sex='';
      this.age='';
    }
  }
}
</script>

<style>

.pet-register2{
  background: url("./src/assets/photovet1.png");
  background-size: cover;
  width: 100%;
  height: 950px;
  display: flex;
}

.data{
  height: 310px;
  position: relative;
  left: 200px;
  top:300px;
  background-color: rgba(227,146,32,0.5);
  width: 20%;
  margin: 40px;
}

.p-float-label{
  margin: 55px;
}

.logo1{
  display: flex;
  position: relative;
  top:250px;
  left: 80px;
  height: 390px;
  width: 30%;
}

.logo2{
  display: flex;
  position: relative;
  left: 190px;
  top: 250px;
  height: 400px;
  width: 40%;
}
.v-register{
  align-items: center;
  justify-content: center;
}


</style>