import { createRouter, createWebHistory } from "vue-router";
import PresentationPage from "@/views/PresentationPage.vue";
import LoginPage from "@/views/LoginPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "presentation",
            component: PresentationPage
        },
        {
            path: "/login",
            name: "login",
            component: LoginPage
        }
    ]
});

export default router;