import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router'
import anime from "animejs";

import components from './components/components.lib';
import icons from './assets/icons.lib'; 

const app = createApp(App);
const pinia = createPinia();

components.forEach((component) => {
    app.component(component.name, component)
})

icons.forEach(component => {
    app.component(component.name, component)
})

app.use(pinia);
app.use(anime)
app.use(router);
app.mount('#app');
