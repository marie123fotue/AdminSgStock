import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './../View/Dashboard.vue'
import Clients from './../View/Client.vue'
import Packs from './../View/Packs.vue'
import Paiement from './../View/Paiement.vue'
import Notifications from './../View/notification.vue'
import Connexion from './../View/Connexion.vue'
const routes = [
    { path: '/Dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/Clients', name: 'Clients', component: Clients },
    { path: '/Packs', name: 'Packs', component: Packs },
    { path: '/Paiement', name: 'Paiement', component: Paiement },
        { path: '/Notifications', name: 'Notifications', component: Notifications},
        { path: '/', name: 'Connexion', component: Connexion }    


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router