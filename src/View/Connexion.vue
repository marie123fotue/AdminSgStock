<script setup>
import { ref } from 'vue'
import { X, User, Lock } from 'lucide-vue-next'

const username = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
    console.log('Connexion avec:', username.value, password.value)
    // Logique de connexion ici
}

const handleForgotPassword = () => {
    console.log('Mot de passe oublié')
    // Logique mot de passe oublié
}

const handleCreateAccount = () => {
    console.log('Créer un compte')
    // Logique création de compte
}

const closeModal = () => {
    console.log('Fermer la modale')
    // Logique de fermeture
}
</script>

<template>
    <div
        class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-4">

        <!-- Modale de connexion -->
        <div class="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl relative animate-slideUp">

            <!-- Bouton fermer -->
            <button @click="closeModal"
                class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors group">
                <X :size="20" class="text-gray-600 group-hover:text-gray-900" />
            </button>

            <!-- Logo -->
            <div class="flex justify-center mb-6">
                <img src="./../assets/images/logo.svg" alt="" class="w-17 h-17  object-contain"/>
           
            </div>


            <!-- Titre -->
            <h1 class="text-center text-xl font-semibold text-gray-900 mb-2">
                Bienvenue sur SG-STOCK
            </h1>
            <p class="text-center text-sm text-gray-600 mb-8">
                Connectez-vous pour accéder à votre espace
            </p>

            <!-- Formulaire -->
            <form @submit.prevent="handleLogin" class="space-y-5">

                <!-- Nom d'utilisateur -->
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
                        Nom d'utilisateur
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User :size="18" class="text-gray-400" />
                        </div>
                        <input id="username" v-model="username" type="text" placeholder="hffd"
                            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required />
                    </div>
                </div>

                <!-- Mot de passe -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                        Mot de passe
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock :size="18" class="text-gray-400" />
                        </div>
                        <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'"
                            placeholder="••••••••"
                            class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required />
                        <button type="button" @click="showPassword = !showPassword"
                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                            <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Bouton de connexion -->
                <RouterLink to ='/Dashboard'>
                <button type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg">
                    Se connecter
                </button>
                </RouterLink>

                <!-- Mot de passe oublié -->
                <div class="text-center">
                    <button type="button" @click="handleForgotPassword"
                        class="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                        Mot de passe oublié ?
                    </button>
                </div>

            </form>

            <!-- Séparateur -->
            <div class="my-6 border-t border-gray-200"></div>

            <!-- Créer un compte -->
            <div class="text-center">
                <p class="text-sm text-gray-600 mb-2">
                @Copright sg-stock -2025
                </p>
            </div>

        </div>

    </div>
</template>

<style scoped>
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slideUp {
    animation: slideUp 0.4s ease-out;
}
</style>