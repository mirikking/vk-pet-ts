import components from './components/lib.ts';
import { createApp } from 'vue';
import './tl_init.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router'

const app = createApp(App);
const pinia = createPinia();

components.forEach((component:any) => {
    app.component(component.name, component)
})

app.use(pinia);
app.use(router);
app.mount('#app');
