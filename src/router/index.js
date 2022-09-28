import { createRouter, createWebHistory } from 'vue-router'


import PetProfileComponent from "@/healthypets/pages/pet-profile.component.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name: "PetProfile",
      component:PetProfileComponent,
    },
    {
      path: "/petprofile",
      name: "PetProfile",
      component: PetProfileComponent,
    }

  ]
})

export default router
