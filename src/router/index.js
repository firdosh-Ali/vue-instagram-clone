import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';

import Dashboard from '../views/Dashboard.vue';
import Homes from '../components/Homes.vue';
import Search from '../components/Search.vue';
import Explore from '../components/Explore.vue';
import Reels from '../components/Reels.vue';
import Messages from '../components/Messages.vue';
import Notifications from '../components/Notifications.vue';
import Create from '../components/Create.vue';
import Profile from '../components/Profile.vue';
import More from '../components/More.vue';


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/signup', name:'signup', component: Signup },
    {path: '/login', name:'Login', component: Login },

    {path: '/dashboard', component: Dashboard, children: [
        { path: 'homes', name: 'homes', component: Homes },
        { path: 'search', name: 'search', component: Search },
        { path: 'explore', name: 'explore', component: Explore },
        { path: 'reels', name: 'reels', component: Reels },
        { path: 'messages', name: 'messages', component: Messages },
        { path: 'notifications', name: 'notifications', component: Notifications },
        { path: 'create', name: 'create', component: Create },
        { path: 'profile', name: 'profile', component: Profile },
        { path: 'more', name: 'more', component: More },
    ],
 },
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