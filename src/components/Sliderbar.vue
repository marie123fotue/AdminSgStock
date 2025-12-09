<script setup>
import { ref } from 'vue'
import logo from './../assets/images/OBJECTS.png'
import { LayoutDashboard, Users, Package, CreditCard, Bell, Settings } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const isCollapsed = ref(false)

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value
}

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Clients', icon: Users, path: '/clients' },
  { name: 'Packs', icon: Package, path: '/packs' },
  { name: 'Paiements', icon: CreditCard, path: '/paiements' },
  { name: 'Notifications', icon: Bell, path: '/Notifications' },
  { name: 'Paramètres', icon: Settings, path: '/parametres' },
]
</script>

<template>
  <!-- SIDEBAR -->
  <aside
    class="bg-black flex flex-col justify-between px-3 transition-all duration-300"
    :class="[
      // Mobile
      'w-[70px] sm:w-[80px]',
      // Desktop
      isCollapsed ? 'md:w-[80px]' : 'md:w-[260px]'
    ]"
  >

    <!-- HEADER -->
    <div class="flex flex-col gap-12 ml-0">

      <!-- LOGO + ADMIN -->
      <div class="flex flex-col gap-1 items-center">

        <!-- LOGO -->
        <div class="transition-all duration-300">
          <img
            :src="logo"
            class="object-contain transition-all duration-300"
            :class="[
              'w-12 h-12 sm:w-14 sm:h-14',
              isCollapsed ? 'md:w-16 md:h-16'
                         : 'md:w-[130px] md:h-[70px] md:pt-4'
            ]"
          />
        </div>

        <!-- ADMIN TEXT (caché collapsé) -->
        <p
          class="text-blue-300 transition-all duration-300 hidden sm:block"
          :class="isCollapsed ? 'md:text-[0px] md:opacity-0' : 'md:opacity-100'"
        >
          Administrateur
        </p>
      </div>

      <!-- MENU -->
      <nav class="flex flex-col gap-3">
        <div
          v-for="item in menuItems"
          :key="item.path"
          @click="router.push(item.path)"
          class="flex items-center gap-3 px-2 text-gray-400 bg-black/10 
                 hover:bg-white/20 py-2 hover:rounded-[5px] 
                 transition-all duration-300 cursor-pointer"
          :class="{ 
            'text-white bg-white/10 rounded-[5px]': item.name === 'Dashboard' 
          }"
        >
          <!-- Icon -->
          <component :is="item.icon" class="size-5" />

          <!-- Title -->
          <span
            v-if="!isCollapsed"
            class="whitespace-nowrap hidden md:block"
          >
            {{ item.name }}
          </span>
        </div>
      </nav>
    </div>

    <!-- FOOTER -->
    <footer class="text-white mb-10 transition-all duration-300 hidden sm:block">
      <p v-if="!isCollapsed" class="text-white/80 font-semibold">Admin</p>
      <p v-if="!isCollapsed" class="text-[13px]">Dernière Connexion : 05/12/2025</p>
    </footer>

  </aside>
</template>
