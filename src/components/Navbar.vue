<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  // When menu is open, prevent body scrolling
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close menu when clicking outside
const handleClickOutside = (event) => {
  const navbarMenu = document.querySelector('.navbar-menu')
  const navbarToggle = document.querySelector('.navbar-toggle')
  
  if (isMenuOpen.value && 
      navbarMenu && 
      !navbarMenu.contains(event.target) && 
      !navbarToggle.contains(event.target)) {
    closeMenu()
  }
}

// Close menu when window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <RouterLink to="/" class="navbar-logo" @click="closeMenu">
        Freedom in movement
      </RouterLink>

      <button 
        class="navbar-toggle" 
        @click="toggleMenu" 
        aria-label="Toggle navigation menu"
        :aria-expanded="isMenuOpen">
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
  z-index: 1001; /* Ensure logo stays above mobile menu */
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
  z-index: 1001; /* Ensure toggle stays above mobile menu */
  padding: 10px;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: var(--dark-color);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    opacity: 0;
    z-index: 1000;
  }

  .navbar-menu.is-active {
    transform: translateX(0);
    opacity: 1;
  }

  .navbar-link {
    margin: 1rem 0;
    font-size: 1.5rem;
    width: auto;
    padding: 0.5rem 1rem;
    text-align: center;
  }
}
</style> 