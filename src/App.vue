<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<style>
/* Global styles kunnen hier komen als we geen apart CSS bestand willen gebruiken */
</style> 