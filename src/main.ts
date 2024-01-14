import "@/assets/base.css";
import App from "@/App.vue";
import { createApp } from "vue";
import router from "@/routes/router";

import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import "primevue/resources/themes/lara-light-green/theme.css";


const app = createApp(App);


app.use(router);
app.use(PrimeVue);
app.component("InputText", InputText);
app.component("InputPassword", Password);

app.mount("#app");