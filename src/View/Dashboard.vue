<script setup>
import Layout from './../components/Layout.vue'
import {
  Package,
   Building2,
  TrendingUp
} from 'lucide-vue-next'



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
    <Layout 
    titre="Dashboard"
    description="Vue d'ensemble"
  >

        <!-- section contenu principales -->
      <article class="">
        <!-- div packs -->
        <main class=" mt-10  grid md:grid-cols-3 gap-6 md:gap-10 flex-1 justify-center ">
          <div v-for="(card, index) in dashboardCards" :key="index"
            class="flex flex-col gap-2 rounded-[10px] bg-white w-[380px] h-[210px] border-gray-300">
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

            <div class="overflow-x-auto">
              <table class="w-full mt-4 text-sm min-w-[800px]">
                <thead class="text-gray-500">
                  <tr class="border-b">
                    <th class="pb-2 text-left">Date</th>
                    <th class="pb-2 text-left">Client</th>
                    <th class="pb-2 text-left">Téléphone</th>
                    <th class="pb-2 text-left">Email</th>
                    <th class="pb-2 text-left">Montant</th>
                    <th class="pb-2 text-left">Statut</th>
                    <th class="pb-2"></th>
                  </tr>
                </thead>

                <tbody class="text-gray-700">

                  <!-- 10 lignes -->
                  <tr class="border-b">
                    <td class="py-3">2025-12-03</td>
                    <td>Alpha SARL</td>
                    <td>690 45 32 10</td>
                    <td>contact@alpha.cm</td>
                    <td>XAF 320,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr class="border-b">
                    <td class="py-3">2025-12-02</td>
                    <td>Omega Group</td>
                    <td>677 89 12 33</td>
                    <td>info@omega-group.com</td>
                    <td>XAF 890,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr class="border-b">
                    <td class="py-3">2025-11-29</td>
                    <td>Beta SARL</td>
                    <td>690 11 54 77</td>
                    <td>beta.sarl@gmail.com</td>
                    <td>XAF 125,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs">En attente</span>
                    </td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr class="border-b">
                    <td class="py-3">2025-11-28</td>
                    <td>Nova Enterprise</td>
                    <td>674 88 20 54</td>
                    <td>support@nova.com</td>
                    <td>XAF 650,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr class="border-b">
                    <td class="py-3">2025-11-27</td>
                    <td>Union Services</td>
                    <td>691 23 45 90</td>
                    <td>contact@unionservices.cm</td>
                    <td>XAF 210,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs">En attente</span>
                    </td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr class="border-b">
                    <td class="py-3">2025-11-26</td>
                    <td>Bright Solutions</td>
                    <td>670 55 44 32</td>
                    <td>hello@brightsolutions.com</td>
                    <td>XAF 780,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr class="border-b">
                    <td class="py-3">2025-11-25</td>
                    <td>Gamma Ltd</td>
                    <td>699 87 65 44</td>
                    <td>support@gammaltd.com</td>
                    <td>XAF 510,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr class="border-b">
                    <td class="py-3">2025-11-22</td>
                    <td>Matrix Corp</td>
                    <td>650 44 11 08</td>
                    <td>matrixcorp@gmail.com</td>
                    <td>XAF 95,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs">Échoué</span></td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr class="border-b">
                    <td class="py-3">2025-11-21</td>
                    <td>Skyline Ltd</td>
                    <td>680 22 54 76</td>
                    <td>info@skyline.com</td>
                    <td>XAF 330,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Payé</span></td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                  <tr>
                    <td class="py-3">2025-11-20</td>
                    <td>Delta Group</td>
                    <td>655 77 31 20</td>
                    <td>deltagroup@business.com</td>
                    <td>XAF 78,000</td>
                    <td><span class="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs">Échoué</span></td>
                    <td class="text-blue-600 cursor-pointer">Voir</td>
                  </tr>

                </tbody>
              </table>
            </div>


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

                <div
                  class="w-16 h-16 rounded-full border-8 border-gray-500 border-t-blue-600 border-r-blue-600 border-b-purple-600">
                </div>
              </div>

              <div class="flex flex-col gap-3 text-sm text-gray-700">

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-blue-600 rounded-full"></span> Pack Standard
                  </div>
                  <span>16</span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-purple-600 rounded-full"></span> Pack Premium
                  </div>
                  <span>16</span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-gray-500 rounded-full"></span> Pack Basic
                  </div>
                  <span>16</span>
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
  </Layout>
</template>
