<template>
  <div class="registervet">

    <div class="logo1">
      <img src="src/assets/fotovet1.png">
    </div>

    <div class="data">
      <h2 class="ml-4 mb-5" id="txtRegV"></h2>

      <span class="p-float-label m-3">
        <pv-input-text id="ruc" type="text" v-model="ruc" class="border-3"/>
        <label for="ruc">RUC</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="streetaddress"  type="text" v-model="streetaddress" class="border-3/"/>
        <label for="streetaddress" >Street Address</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="phonenumber" type="text" v-model="phonenumber" class="border-3"/>
        <label for="phonenumber">Phone Number</label>
      </span>

      <div class="v-register">
        <pv-button label=" Check in " style="background-color: #ffa448; padding: 0px 150px; "
                   @click="registerVet"
        />
      </div>
    </div>

    <div class="logo2">
      <img src="src/assets/fotovet2.png">
    </div>
  </div>
</template>


<script>
export default {
  name: "veterinary-register.component",

  data(){
    return{

      selectedType: null,
      ruc:'',
      streetaddress: '',
      phonenumber:'',

      type:[
        {typeVet: 'Vet', code:'VET'}
      ],

      Vet:[],
      VetList:[],
    }
  },


  methods:{
    registerVet(){
      this.VetList.push({
        ruc:this.ruc,
        streetaddres:this.streetaddress,
        phonenumber:this.phonenumber,
        selectedType:this.selectedType,
      }),

      console.log(this.VetList)

      this.ruc='';
      this.streetaddress='';
      this.phonenumber='';
      this.selectedType=null;
    }
  }

}


</script>





<style >

.registervet{
  background: url("./src/assets/FondoN.jpg");
  background-size: cover;
  width: 1810px;
  height:935px;
  display: flex;
  border:0;

}

.data{
  border: 2px solid var(--orange);
  height:250px;
  position: relative;
  left:0;
  top:300px;
  background-color: rgba(227,146,32,0.5);
  width: 20%;


}

.v-register{
  margin: 50px 5px;
  color: #ffa448;

}

.logo1{
  display: flex;
  position: relative;
  top:250px;
  left: 50px;
  height: 400px;
  width: 50%;
}

.v-register{
  align-items: center;
  justify-content: center;
}



.logo2{
  display: flex;
  position: relative;
  left: 120px;
  top: 250px;
  height: 400px;
  width: 50%;
}



</style>
