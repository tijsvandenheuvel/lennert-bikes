<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <RouterLink to="/" class="navbar-logo" @click="closeMenu">
        Lennert Bikes
      </RouterLink>

      <button 
        class="navbar-toggle" 
        @click="toggleMenu" 
        aria-label="Toggle navigation menu">
        <span :class="['toggle-icon', { 'open': isMenuOpen }]"></span>
      </button>

      <div :class="['navbar-menu', { 'is-active': isMenuOpen }]">
        <RouterLink 
          to="/" 
          class="navbar-link" 
          @click="closeMenu">
          Home
        </RouterLink>
        <RouterLink 
          to="/sponsor" 
          class="navbar-link" 
          @click="closeMenu">
          Sponsor
        </RouterLink>
        <RouterLink 
          to="/updates" 
          class="navbar-link" 
          @click="closeMenu">
          Updates
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--dark-color);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-link {
  color: white;
  margin-left: 1.5rem;
  text-decoration: none;
  transition: opacity 0.3s;
}

.navbar-link:hover {
  opacity: 0.8;
}

.navbar-link.router-link-active {
  font-weight: 600;
  border-bottom: 2px solid var(--secondary-color);
}

.navbar-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
}

.toggle-icon {
  display: block;
  position: relative;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s;
}

.toggle-icon::before,
.toggle-icon::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s;
}

.toggle-icon::before {
  transform: translateY(-8px);
}

.toggle-icon::after {
  transform: translateY(8px);
}

.toggle-icon.open {
  background-color: transparent;
}

.toggle-icon.open::before {
  transform: rotate(45deg);
}

.toggle-icon.open::after {
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: var(--dark-color);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    opacity: 0;
    z-index: 900;
  }

  .navbar-menu.is-active {
    transform: translateY(0);
    opacity: 1;
  }

  .navbar-link {
    margin: 0.5rem 0;
    width: 100%;
    padding: 0.5rem 0;
  }
}
</style> 