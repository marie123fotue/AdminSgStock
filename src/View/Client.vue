<template>
  <Layout 
    titre="Clients"
    description="Liste et gestion des clients"
  >

        <main class="p-6 bg-gray-50 min-h-screen">

            <!-- TITRE + BOUTONS -->
            <section class="flex items-center justify-between mb-4">
                <div>
                    <h1 class="text-xl font-semibold">Gestion des Clients</h1>
                    <p class="text-sm text-gray-500">8 entreprises enregistrées</p>
                </div>

                <div class="flex items-center gap-3">
                    <button class=" flex border flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
                        <DownloadIcon class="w-5 h-5"/> Exporter
                    </button>

                    <button class=" flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                    <PlusIcon class="w-5 h-5"/> Entreprise
                    </button>
                </div>
            </section>

            <!-- BARRE DE RECHERCHE -->
            <input v-model="search" type="text" placeholder="Rechercher une entreprise, admin ou email..."
                class="w-full px-4 py-2 border rounded-xl mb-6" />

            <!-- TABLEAU -->
            <div class="bg-white shadow rounded-xl overflow-hidden">
                <table class="w-full border-collapse">
                    <thead class="bg-gray-100 text-gray-600 text-sm">
                        <tr>
                            <th class="p-3 text-left">DATE CRÉATION</th>
                            <th class="p-3 text-left">ENTREPRISE</th>
                            <th class="p-3 text-center">POINTS DE VENTE</th>
                            <th class="p-3 text-left">ADMIN</th>
                            <th class="p-3 text-left">EMAIL</th>
                            <th class="p-3 text-left">TÉLÉPHONE</th>
                            <th class="p-3 text-left">PACK</th>
                            <th class="p-3 text-left">EXPIRATION</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(c, i) in clients" :key="i" class="border-t hover:bg-gray-50">

                            <td class="p-3">{{ c.date }}</td>

                            <td class="p-3 font-medium">{{ c.entreprise }}</td>

                            <td class="p-3 text-center">
                                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                                    {{ c.pv }}
                                </span>
                            </td>

                            <td class="p-3">{{ c.admin }}</td>

                            <td class="p-3">{{ c.email }}</td>

                            <td class="p-3">{{ c.telephone }}</td>

                            <td class="p-3">
                                <span class="px-3 py-1 rounded-full" :class="c.packColor">
                                    {{ c.pack }}
                                </span>
                            </td>

                            <td class="p-3 font-medium" :class="c.expColor">
                                {{ c.expiration }}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </main>
    </Layout>
</template>

<script setup>
import Layout from './../components/Layout.vue'

import { ref } from 'vue'
import { PlusIcon } from 'lucide-vue-next'
import { DownloadIcon } from 'lucide-vue-next'

const search = ref("")

const clients = ref([
    {
        date: "15/01/2024",
        entreprise: "TechStore SN",
        pv: 5,
        admin: "Amadou Diallo",
        email: "amadou@techstore.sn",
        telephone: "+221 77 123 45 67",
        pack: "Professionnel",
        packColor: "bg-purple-100 text-purple-700",
        expiration: "45 jours",
        expColor: "text-green-600"
    },
    {
        date: "22/02/2024",
        entreprise: "Boutique Mbaye",
        pv: 2,
        admin: "Fatou Mbaye",
        email: "f.mbaye@boutique.sn",
        telephone: "+221 78 234 56 78",
        pack: "Populaire",
        packColor: "bg-blue-100 text-blue-700",
        expiration: "8 jours",
        expColor: "text-red-600"
    },
    {
        date: "10/03/2024",
        entreprise: "Super Marché Dakar",
        pv: 8,
        admin: "Moussa Ndiaye",
        email: "ndiaye@supermarche.sn",
        telephone: "+221 77 345 67 89",
        pack: "Professionnel",
        packColor: "bg-purple-100 text-purple-700",
        expiration: "22 jours",
        expColor: "text-green-600"
    },
    {
        date: "05/04/2024",
        entreprise: "Pharmacie Thiès",
        pv: 3,
        admin: "Aïssatou Sow",
        email: "sow@pharmacie.sn",
        telephone: "+221 76 456 78 90",
        pack: "Populaire",
        packColor: "bg-blue-100 text-blue-700",
        expiration: "15 jours",
        expColor: "text-green-600"
    },
    {
        date: "18/04/2024",
        entreprise: "Électronique Plus",
        pv: 1,
        admin: "Ibrahim Sy",
        email: "i.sy@electronique.sn",
        telephone: "+221 77 567 89 01",
        pack: "Standard",
        packColor: "bg-gray-200 text-gray-700",
        expiration: "5 jours",
        expColor: "text-red-600"
    },
    {
        date: "02/05/2024",
        entreprise: "Mode & Style",
        pv: 4,
        admin: "Mariama Diop",
        email: "diop@modestyle.sn",
        telephone: "+221 78 678 90 12",
        pack: "Populaire",
        packColor: "bg-blue-100 text-blue-700",
        expiration: "30 jours",
        expColor: "text-green-600"
    },
    {
        date: "20/05/2024",
        entreprise: "Restaurant Le Ceddo",
        pv: 2,
        admin: "Ousmane Fall",
        email: "fall@ceddo.sn",
        telephone: "+221 77 789 01 23",
        pack: "Standard",
        packColor: "bg-gray-200 text-gray-700",
        expiration: "3 jours",
        expColor: "text-red-600"
    },
    {
        date: "12/06/2024",
        entreprise: "Librairie Nouvelle",
        pv: 6,
        admin: "Khady Sarr",
        email: "sarr@librairie.sn",
        telephone: "+221 76 890 12 34",
        pack: "Professionnel",
        packColor: "bg-purple-100 text-purple-700",
        expiration: "50 jours",
        expColor: "text-green-600"
    }
])

</script>