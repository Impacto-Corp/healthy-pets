<template>
  <pv-sidebar>
    <h2 font-size="35px" font-weight="bold">Healthy Pets</h2>
  </pv-sidebar>
  <div class="flex align-content-center">
    <div class="align-content-center">
      <img src="Veterinaria1.png" width="355px" height="355px" border-radius="50%">
    </div>
    <div class="justify-content-center">
      <h3 font-size="24px" font-weight="bold">Veterinaria Lima</h3>
      <p font-size="15px">
        Fundada en 2008, se especializa principalmente en atender emergencias veterinarias y también ofrece servicios cosmeticos
      </p>
      <h3 font-size="24px" font-weight="bold">Comentarios destacados:</h3>
      <ul list-style-type="disc">
        <li font-size="15px" font-style="italic">"De los mejores servicios que he recibido"</li>
        <li font-size="15px" font-style="italic">"Lastima que no mucha gente conoce este lugar, se merece más clientes"</li>
        <li font-size="15px" font-style="italic">"Una buena alternativa con buenos precios"</li>
      </ul>
      <pv-button label="Registrar Mascota" class="p-button-success"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "vetinfo"
}
</script>

<style scoped>

</style>