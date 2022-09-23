import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import petProfileComponent from "../healthypets/pages/pet-profile.component";

const VeterinaryRegisterComponent = () => import('../healthypets/pages/veterinary-register.component');
const UserRegisterComponent = () => import('../healthypets/pages/user-register.component');
const StartSessionComponent = () => import('../healthypets/pages/start-session.component');
const PetRegisterComponent = () => import('../healthypets/pages/pet-register.component');
const PetProfileComponent = () => import('../healthypets/pages/pet-profile.component');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pet/profile',
      name: 'profile',
      component: PetProfileComponent
    },
    {
      path: '/pet/register',
      name: 'register',
      component: PetRegisterComponent
    },
    {
      path: '/user/register',
      name: 'useregister',
      component: UserRegisterComponent
    }

  ]
})

export default router
