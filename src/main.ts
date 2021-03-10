import { createApp } from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

// import project files
import App from './App.vue'
import router from './router'
import store from './store'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const app = createApp(App);



app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app');
