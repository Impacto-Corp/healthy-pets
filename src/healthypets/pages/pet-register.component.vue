<template>
  <div>
    <pv-sidebar v-model:visible="visibleLeft">
      <h2>Healthy Pets</h2>
    </pv-sidebar>
  </div>
  <div>
    <pv-card>
      <template class>
        <img src="Veterinaria1.png" width="355px" height="355px" border-radius="50%" alt="logoVetLima">
      </template>
    </pv-card>
    <pv-card>
      <template class="mt-4 align-content-center">
        {{ ('veterinaries.name') }}
      </template>
      <template class="mt-4 align-content-center">
        {{ ('veterinaries.content') }}
      </template>
      <template class="mt-4 align-content-center">
        Comentarios destacados:
      </template>
      <template class="mt-4 align-content-evenly">
        <ul>
          <li>{{ ('commentaries.comment') }}</li>
        </ul>
      </template>
      <template class="mt-4 align-content->
        <pv-button label="Registra mascota aquí" icon="pi pi-check"/>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "pet-register.component.vue"
}
</script>
    
<style scoped>
    
</style>
