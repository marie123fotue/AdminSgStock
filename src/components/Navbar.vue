<script setup>
import { ref } from 'vue'
import { Search, UserCircle, Bell, CreditCard } from 'lucide-vue-next'
import { RouterLink } from 'vue-router';
const props = defineProps({
  titre: {
    type: String,
    required: false,
    default: ""
  },
  description: {
    type: String,
    default: ""
  }
})

const searchQuery = ref("")
</script>

<template>
  <header class="bg-white h-fit py-5 flex justify-between items-center px-4 shadow-sm">

    <!-- GAUCHE -->
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <CreditCard class="w-6 text-gray-800" />
        <p class="font-semibold text-gray-800 hidden sm:block">{{ props.titre }}</p>
      </div>
      <p class="text-sm text-gray-500 ml-8 -mt-1 hidden sm:block">{{props.description}}</p>
    </div>
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
          <RouterLink to="/">
  
             <UserCircle class="size-8 " />

        </RouterLink>
       

        </main>

  </header>
</template>
