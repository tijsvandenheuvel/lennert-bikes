<script setup>
import { ref, onMounted } from 'vue'
import { useStatsStore } from '@/stores/stats'

const statsStore = useStatsStore()
const isAuthenticated = ref(false)
const password = ref('')
const incorrectPassword = ref(false)
const adminPassword = 'lennert1234' // This should be moved to environment variable in a real app

// Form data
const distanceKm = ref(statsStore.distanceKm)
const sponsorCount = ref(statsStore.sponsorCount)
const amountPerKm = ref(statsStore.amountPerKm)
const successMessage = ref('')
const errorMessage = ref('')

// Check if already authenticated (in a real app, this would verify a JWT token)
onMounted(() => {
  const isAdmin = localStorage.getItem('isAdmin')
  if (isAdmin === 'true') {
    isAuthenticated.value = true
  }
  
  // Load current stats
  statsStore.fetchStats().then(() => {
    distanceKm.value = statsStore.distanceKm
    sponsorCount.value = statsStore.sponsorCount
    amountPerKm.value = statsStore.amountPerKm
  })
})

// Login function
const login = () => {
  if (password.value === adminPassword) {
    isAuthenticated.value = true
    incorrectPassword.value = false
    localStorage.setItem('isAdmin', 'true')
  } else {
    incorrectPassword.value = true
  }
}

// Logout function
const logout = () => {
  isAuthenticated.value = false
  localStorage.removeItem('isAdmin')
}

// Update statistics
const updateStats = () => {
  try {
    // In a real app, this would call an API
    // For now, we're just updating the store
    statsStore.updateStats({
      distanceKm: parseFloat(distanceKm.value),
      sponsorCount: parseInt(sponsorCount.value),
      amountPerKm: parseFloat(amountPerKm.value)
    })
    
    successMessage.value = 'Statistics updated successfully!'
    errorMessage.value = ''
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  } catch (error) {
    errorMessage.value = 'Error updating statistics: ' + error.message
    successMessage.value = ''
  }
}
</script>

<template>
  <div class="admin">
    <!-- Header section -->
    <section class="section-header bg-light">
      <div class="container">
        <h1>Admin Panel</h1>
        <p class="lead">
          Manage statistics and content for the Lennert Bikes website.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Login Form -->
        <div v-if="!isAuthenticated" class="login-container">
          <div class="login-form">
            <h2>Admin Login</h2>
            <div class="form-group">
              <label for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                v-model="password" 
                placeholder="Enter admin password"
                @keyup.enter="login"
              >
            </div>
            <div v-if="incorrectPassword" class="error-message">
              Incorrect password. Please try again.
            </div>
            <button @click="login" class="btn btn-primary">Login</button>
          </div>
        </div>

        <!-- Admin Dashboard -->
        <div v-else class="admin-dashboard">
          <div class="dashboard-header">
            <h2>Dashboard</h2>
            <button @click="logout" class="btn btn-outline">Logout</button>
          </div>

          <!-- Stats Management -->
          <div class="admin-card">
            <h3>Update Statistics</h3>
            <p>Update the current statistics shown on the website.</p>
            
            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="distanceKm">Distance (km)</label>
                <input 
                  type="number" 
                  id="distanceKm" 
                  v-model="distanceKm" 
                  min="0" 
                  step="0.1"
                >
              </div>
              <div class="form-group">
                <label for="sponsorCount">Number of Sponsors</label>
                <input 
                  type="number" 
                  id="sponsorCount" 
                  v-model="sponsorCount" 
                  min="0"
                >
              </div>
              <div class="form-group">
                <label for="amountPerKm">Average Amount per 100km (€)</label>
                <input 
                  type="number" 
                  id="amountPerKm" 
                  v-model="amountPerKm" 
                  min="0" 
                  step="0.01"
                >
              </div>
            </div>
            
            <button @click="updateStats" class="btn btn-primary">Update Stats</button>
          </div>

          <!-- Sponsor Data -->
          <div class="admin-card">
            <h3>Sponsor Data</h3>
            <p>In a future version, this section will allow you to view and export sponsor data.</p>
            
            <div class="placeholder-content">
              <p>Sponsor list will appear here in a future update.</p>
              <button class="btn btn-outline" disabled>Export Sponsors (Coming Soon)</button>
            </div>
          </div>

          <!-- Content Management -->
          <div class="admin-card">
            <h3>Content Management</h3>
            <p>In a future version, this section will allow you to add and manage journey updates.</p>
            
            <div class="placeholder-content">
              <p>Content management tools will appear here in a future update.</p>
              <button class="btn btn-outline" disabled>Add Update (Coming Soon)</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-header {
  text-align: center;
  padding: 4rem 0;
}

.lead {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 1rem auto 0;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.login-form {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-outline {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-outline:hover {
  background-color: rgba(52, 152, 219, 0.1);
}

.btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.admin-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.placeholder-content {
  background-color: var(--light-color);
  padding: 1.5rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
}

.error-message {
  color: var(--danger-color);
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: 4px;
}

.success-message {
  color: var(--success-color);
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 4px;
}

@media (max-width: 768px) {
  .section-header {
    padding: 3rem 0;
  }
  
  .admin-card {
    padding: 1.5rem;
  }
  
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style> 