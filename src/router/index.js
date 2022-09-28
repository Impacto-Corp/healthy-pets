
import { createRouter, createWebHistory } from 'vue-router';

const UserRegisterComponent = () => import('../security/pages/user-register.component.vue');
const StartSessionComponent = () => import('../security/pages/start-session.component.vue');
const PetRegisterComponent = () => import('../healthypets/pages/pet-register.component.vue');
const PetProfileComponent = () => import('../healthypets/pages/pet-profile.component.vue');

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
