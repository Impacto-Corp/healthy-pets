<template>

  <div class="title">
    <p>Healthy Pets</p>
    <br>
    <p>The platform to find your ideal veterinarian</p>
    <img src="../../assets/Logotipo.JPG">
  </div>

  <div class="card">
    <h1>Sign in to Healthy Pets</h1>
    <br>
    <hr>
    <br>
    <h4>Username or Email Address</h4>
    <pv-input-text style="padding: 10px 300px; text-align: left" type="text" v-model="text"/>
    <br>
    <h4>Password</h4>
    <pv-input-text v-model="password"/>
    <br>
    <br>
    <span>
    <button class="mr-3" style="padding: 5px 50px;background-color: #ffa448;border-radius: 20px"  >Log in</button>
      <button style="padding: 5px 23px;background-color: #ffa448;border-radius: 20px" >Create account</button>

    </span>
  </div>

</template>

<script>



export default {
  name: "start-session",
  data() {
    return {
      text: '',
      password:'',
    }
  }
}
</script>

<style>
{
  background:url("../../assets/Fondo1.png");
}
img{
  width: 400px;
  display:flex;
}
.title{

  text-align: justify;
  font-size: 35px;
  font-weight: bold;
  color: #667080;
  left: -50px;
  top: -100px;
  font-family: Roboto;
}
.card {
  color: #667080;
  display: flow;
  font-family: Roboto;
}
Button{
  color: white;
  font-family: Roboto;
}
</style>