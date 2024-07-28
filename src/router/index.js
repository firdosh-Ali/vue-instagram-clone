import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/signup', name:'signup', component: Signup },
    {path: '/login', name:'Login', component: Login },
    {path: '/dashboard', name:'dashboard', component: Dashboard, },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('authToken'); 

    if(to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'Login'});
    }else{
        next();
    }
});

export default router;