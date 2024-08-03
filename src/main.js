import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;


createApp(App).use(router).mount('#app')
