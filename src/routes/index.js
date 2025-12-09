import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './../View/Dashboard.vue'
import Clients from './../View/Client.vue'
import Packs from './../View/Packs.vue'
import Paiement from './../View/Paiement.vue'
import Notifications from './../View/notification.vue'
const routes = [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/Clients', name: 'Clients', component: Clients },
    { path: '/Packs', name: 'Packs', component: Packs },
    { path: '/Paiement', name: 'Paiement', component: Paiement },
        { path: '/Notifications', name: 'Notifications', component: Notifications }    


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router