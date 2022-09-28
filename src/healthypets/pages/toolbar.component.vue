<template>
  <pv-toolbar
      style="
        background-color: #EDF0F5 !important;
        justify-content: start !important;
      "
  >
    <template #start>
      <div style="margin-inline: 1rem" class="logo flex align-items-center">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="logo" class="height"/>
        </router-link>
        <div class="card">
          <div class="p-fluid">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-search" style="color: red" />
              <pv-input-text
                  type="text"
                  placeholder=""
                  required="true"
                  autocomplete="off"
              ></pv-input-text>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #end>
      <div class="flex-column " >
        <router-link
            v-for="item in items"
            :to="item.to"
            custom
            v-slot="{ navigate, href }"
            :key="item.label"
        >
          <pv-button
              class="p-button-text text-656E81"
              :href="href"
              @click="navigate"
          >{{ item.label }}</pv-button
          >
        </router-link>
        <div  style="position:absolute;left:1900px;top:20px">
          <img style="height:100px" src="data:image/jpeg;base64,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" >
          <p>Facundo Garcia</p>

        </div>


      </div>
      <div>




      </div>
    </template>

  </pv-toolbar>

</template>
<script>

export default {
  name:"tool-bar",
  data(){
    return{
      items: [
        { label: "PetProfile", to: "/petprofile" },
        { label: "Home", to: "/" },
        // { label: "Following", to: "/user-view" },
      ],
    }
  }
}
</script>
<style>
.height{
  height: 123px;
}

</style>