<template>
  <div>
    <pv-sidebar v-model:visible="visibleLeft">
      <h2>Healthy Pets</h2>
    </pv-sidebar>
  </div>
  <div>
    <pv-card>
      <template #content>
        <img src="Veterinaria1.png" width="355px" height="355px" border-radius="50%" alt="logoVetLima">
      </template>
    </pv-card>
    <pv-card>
      <template #title>
        {{ ('veterinaries.name') }}
      </template>
      <template #content>
        {{ ('veterinaries.content') }}
      </template>
      <template #title>
        Comentarios destacados:
      </template>
      <template #content>
        <ul>
          <li>{{ ('commentaries.comment') }}</li>
        </ul>
      </template>
      <template #footer>
        <p-button label="Registra mascota aquí" icon="pi pi-check"/>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "vetinfo"
}
</script>
    
<style scoped>
    
</style>
