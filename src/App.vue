<script setup>
import { ref } from 'vue';
import logo from './../src/assets/images/OBJECTS.png'
import {
  Search,
  UserCircle,
  Bell,
  LayoutDashboard,
  Users,
  Package,
  CreditCard,
  Settings,
  Building2,
  TrendingUp
} from 'lucide-vue-next'
const searchQuery = ref("")

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },  // ✅ Composant direct
  { name: 'Clients', icon: Users, path: '/clients' },
  { name: 'Packs', icon: Package, path: '/packs' },
  { name: 'Paiements', icon: CreditCard, path: '/paiements' },
  { name: 'Notifications', icon: Bell, path: '/notifications' },
  { name: 'Paramètres', icon: Settings, path: '/parametres' },
]
const dashboardCards = [
  {
    icon: Building2,
    number: 41,
    label: "Entreprises Actives",
    selectOptions: ["Actif", "Inactif"],
    bg: "bg-blue-100",
    text: "text-blue-500",
    footer: null // 👉 pas de footer
  },
  {
    icon: Package,
    number: 12,
    label: "Packs expirant sous 7 jours",
    selectOptions: ["Tous", "Actifs", "Expirés"],
    bg: "bg-green-100",
    text: "text-green-500",
    footer: {
      type: "multi",
      items: [
        { value: "3", label: "3 jours" },
        { value: "7", label: "7 jours" },
        { value: "30", label: "30 jours" }
      ]
    }
  },
  {
    icon: TrendingUp,
    number: "XAF 540 000",
    label: "Revenus du mois",
    selectOptions: ["Mensuel", "Annuel"],
    bg: "bg-yellow-100",
    text: "text-yellow-500",
    footer: {
      type: "single",
      text: "Derniers 12 mois · Détails des paiements"
    }
  }
]


</script>

<template>
  <section class="flex inset-0 bg-gray-100">
    <!-- modal de gauche  -->
    <article class="  bg-black w-[260px] flex flex-col justify-between px-3">
      <!-- entete -->
      <main class="flex flex-col gap-12 ">
        <!-- header modal -->
        <main class="flex flex-col gap-1">
          <div class="w-[130px] h-[70px] pt-4">
            <img :src="logo" alt="">
          </div>
          <div class="relative">
            <p class=" absolute text-blue-300  -top-5 pl-10">Administrateur</p>
          </div>
        </main>
        <!-- contenu -->
        <div class="flex flex-col gap-5">
          <div
            class="flex gap-3  px-2 text-gray-400 bg-black/10 hover:bg-white/20 py-1 hover:rounded-[5px] cursor-pointer "
            v-for="item in menuItems" :key="item.path" :class="{
              'text-white  bg-white/10 rounded-[5px]': item.name === 'Dashboard'
            }">
            <component :is="item.icon" class="size-5 " />
            <span> {{ item.name }}</span>
          </div>

        </div>
      </main>

      <!-- footer -->
      <footer class=" flex-col gap-1 text-white mb-30 ">
        <p class="text-white/80 font-semibold">Admin</p>
        <p class="text-[13px]">Derniere Connexion : 05/12/2025</p>

      </footer>

    </article>
    <!-- section de nav-bar -->
    <section class="flex flex-col items-center flex-1">
      <article class=" bg-white h-[60px] w-full flex justify-between items-center  ">
        <!-- section de gauche -->
        <main class="flex flex-col gap-[1px] text-gray-500 pl-5 pt-1 ">
          <p class="text-gray-700 font-semibold">Dashboard</p>
          <p>Vue d'ensemble</p>

        </main>
        <!-- section de gauche -->
        <main class="flex items-center gap-5 pr-10 ">
          <!-- barre de recherche -->
          <div class="relative w-full px-5 ">
            <!-- Icône et texte à gauche de l'input -->
            <div class="absolute inset-y-0 left-7 flex items-center gap-2 pointer-events-none">
              <search class="size-5 text-gray-400" />
              <span v-if="!searchQuery" class="text-sm text-gray-400">
                Rechercher un client, pack..
              </span>
            </div>

            <!-- Input avec padding à gauche pour laisser place à l'icône -->
            <input type="search" v-model="searchQuery"
              class="w-[250px] py-2 pl-12 pr-5 text-sm text-gray-700 border-[0.2px] border-gray-300 rounded-[5px] focus:outline-1 focus:border-blue-600" />
          </div>

          <!-- cloche -->
          <div class="flex items-center relative">
            <bell class="size-6 text-gray-600" />
            <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <!-- personne icone -->
          <UserCircle class="size-8 " />

        </main>
      </article>
      <!-- section contenu principales -->
      <article class="">
        <main class=" mt-10 mr-10 grid md:grid-cols-3 gap-4 md:gap-20 flex-1 ">
          <div v-for="(card, index) in dashboardCards" :key="index"
            class="flex flex-col gap-2 rounded-[10px] bg-white w-[300px] h-[210px] border-gray-300">
            <!-- entete de la div   -->
            <div class="flex justify-between items-center px-5">
              <div :class="[
                'group w-10 h-10 rounded-[10px] mt-2 flex items-center justify-center',
                card.bg
              ]">
                <component :is="card.icon" :class="['w-5 h-5 stroke-current', card.text]" />
              </div>
              <select class="border-none rounded px-2 py-1 text-sm">
                <option v-for="option in card.selectOptions" :key="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <!-- corp -->
            <div class="flex flex-col  px-5">
              <span class="text-[30px]  font-semibold">
                {{ card.number }}
              </span>
              <span class="text-[13px]">
                {{ card.label }}
              </span>
            </div>
            <!-- Footer selon le type de card -->
            <div v-if="card.footer" class="px-5 mt-3">
              <hr class="w-full h-px bg-gray-200 mb-3" />

              <!-- MULTI (3jours / 7jours / 30 jours) -->
              <div v-if="card.footer.type === 'multi'" class="flex gap-8 text-blue-600 font-semibold">
                <div v-for="(item, i) in card.footer.items" :key="i" class="flex flex-col">
                  <span class="text-[18px]">{{ item.value }}</span>
                  <span class="text-gray-500 text-[12px] ">{{ item.label }}</span>
                </div>
              </div>

              <!-- SINGLE (Derniers 12 mois...) -->
              <div v-if="card.footer.type === 'single'" class="text-gray-500 text-sm">
                {{ card.footer.text }}
              </div>
            </div>

          </div>
        </main>
        <!-- contenu du milieu de la page  -->
        <div class="relative mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">

          <!-- ========================= -->
          <!--   1️⃣ PAIEMENTS RÉCENTS   (À GAUCHE - 2 COLONNES) -->
          <!-- ========================= -->
          <div class="bg-white rounded-xl shadow-sm p-6 lg:col-span-2 h-full">

            <div class="flex justify-between items-center mb-2">
              <div>
                <h2 class="text-lg font-semibold text-gray-800">Paiements récents</h2>
                <p class="text-gray-500 text-sm -mt-1">Dernières transactions</p>
              </div>
              <button class="text-blue-600 text-sm hover:underline">Voir tout</button>
            </div>

            <table class="w-full mt-4 text-sm">
              <thead class="text-gray-500">
                <tr class="border-b">
                  <th class="pb-2 text-left">Date</th>
                  <th class="pb-2 text-left">Client</th>
                  <th class="pb-2 text-left">Montant</th>
                  <th class="pb-2 text-left">Statut</th>
                  <th class="pb-2"></th>
                </tr>
              </thead>

              <tbody class="text-gray-700">

                <!-- 10 lignes ici -->
                <tr class="border-b">
                  <td class="py-3">2025-12-03</td>
                  <td>Alpha SARL</td>
                  <td>XAF 320,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <tr class="border-b">
                  <td class="py-3">2025-12-02</td>
                  <td>Omega Group</td>
                  <td>XAF 890,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <tr class="border-b">
                  <td class="py-3">2025-11-29</td>
                  <td>Beta SARL</td>
                  <td>XAF 125,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs">En attente</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <tr class="border-b">
                  <td class="py-3">2025-11-28</td>
                  <td>Nova Enterprise</td>
                  <td>XAF 650,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <tr class="border-b">
                  <td class="py-3">2025-11-27</td>
                  <td>Union Services</td>
                  <td>XAF 210,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs">En attente</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <tr class="border-b">
                  <td class="py-3">2025-11-26</td>
                  <td>Bright Solutions</td>
                  <td>XAF 780,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <tr class="border-b">
                  <td class="py-3">2025-11-25</td>
                  <td>Gamma Ltd</td>
                  <td>XAF 510,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <tr class="border-b">
                  <td class="py-3">2025-11-22</td>
                  <td>Matrix Corp</td>
                  <td>XAF 95,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs">Échoué</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <!-- <tr class="border-b">
                  <td class="py-3">2025-11-21</td>
                  <td>Skyline Ltd</td>
                  <td>XAF 330,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td>
                </tr>

                <tr>
                  <td class="py-3">2025-11-20</td>
                  <td>Delta Group</td>
                  <td>XAF 78,000</td>
                  <td><span class="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs">Échoué</span></td>
                  <td class="text-blue-600 cursor-pointer">Voir</td> -->
                <!-- </tr> -->

              </tbody>
            </table>

          </div>

          <!-- ========================= -->
          <!--     COLONNE DE DROITE     -->
          <!--    (TOP PACKS + EXPIRANTS) -->
          <!-- ========================= -->
          <div class="flex flex-col gap-4 h-full">

            <!-- 2️⃣ TOP PACKS -->
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col">

              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-gray-800 font-semibold text-lg">Top packs</h3>
                  <p class="text-gray-500 text-sm -mt-1 mb-4">Par nombre d'utilisateurs</p>
                </div>

                <div class="w-16 h-16 rounded-full border-8 border-gray-200 border-t-blue-600"></div>
              </div>

              <div class="flex flex-col gap-3 text-sm text-gray-700">

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-blue-600 rounded-full"></span> Pack Standard
                  </div>
                  <span>48</span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-purple-600 rounded-full"></span> Pack Premium
                  </div>
                  <span>31</span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-gray-500 rounded-full"></span> Pack Basic
                  </div>
                  <span>19</span>
                </div>

              </div>

            </div>

            <!-- 3️⃣ PACKS EXPIRANTS -->
            <div class="bg-white rounded-xl shadow-sm p-6 flex flex-col">

              <div class="flex justify-between items-center mb-4">
                <div>
                  <h3 class="text-gray-800 font-semibold text-lg">Packs expirant</h3>
                  <p class="text-gray-500 text-sm -mt-1">Alerte</p>
                </div>
                <button class="text-blue-600 text-sm hover:underline">Voir</button>
              </div>

              <div class="flex justify-between py-3 border-b">
                <span class="text-gray-600">Dans 3 jours</span>
                <span class="font-medium">9</span>
              </div>

              <div class="flex justify-between py-3 border-b">
                <span class="text-gray-600">Dans 7 jours</span>
                <span class="font-medium">22</span>
              </div>

              <div class="flex justify-between py-3">
                <span class="text-gray-600">Dans 30 jours</span>
                <span class="font-medium">56</span>
              </div>

            </div>

          </div>

        </div>




      </article>

    </section>
  </section>



</template>
