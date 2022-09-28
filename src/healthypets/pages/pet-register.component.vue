<template>
  <div>
    <pv-sidebar v-model:visible="visibleLeft" class="p-sidebar-content">
      <h2>Healthy Pets</h2>
    </pv-sidebar>
  </div>
  <div>
    <pv-card class="mt-2">
      <template class="mt-2 align-content-center">
        <img src="Veterinaria1.png" width="355px" height="355px" border-radius="50%" alt="logoVetLima">
      </template>
    </pv-card>
    <pv-card class="mt-2">
      <template #title class="mt-4 align-content-start p-card-title">
        <h3>{{ ('veterinaries.name') }}</h3>
      </template>
      <template #content class="mt-4 align-content-center p-card-content">
        <p>{{ ('veterinaries.content') }}</p>
      </template>
      <template #title class="mt-4 align-content-center p-card-title">
        <h3>Comentarios destacados:</h3>
      </template>
      <template #commentlist class="mt-4 align-content-evenly p-card-content">
        <ul>
          <li>{{ ('commentaries.comment') }}</li>
        </ul>
      </template>
      <template #regbutton class="mt-4 align-content-center p-card-footer">
        <pv-button label="Registra mascota aquí" icon="pi pi-check"/>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "pet-register.component.vue",
  components: {PvCard, PvButton,PvSidebar}
}
</script>
    
<style scoped>
    
</style>
