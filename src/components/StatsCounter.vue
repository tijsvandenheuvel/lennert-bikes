<script setup>
import { onMounted } from 'vue'
import { useStatsStore } from '@/stores/stats'

const statsStore = useStatsStore()

onMounted(async () => {
  await statsStore.fetchStats()
})
</script>

<template>
  <div class="stats-counter">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">{{ statsStore.distanceKm.toLocaleString() }}</div>
          <div class="stat-label">Kilometers</div>
          <div class="stat-description">Distance cycled</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-value">{{ statsStore.sponsorCount }}</div>
          <div class="stat-label">Sponsors</div>
          <div class="stat-description">Joined the journey</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-value">€{{ statsStore.totalPledged.toLocaleString() }}</div>
          <div class="stat-label">Pledged</div>
          <div class="stat-description">For Kurdish rebuilding</div>
        </div>
      </div>
      
      <div class="progress-container">
        <div class="progress-label">
          <span>{{ statsStore.percentageCompleted }}% completed</span>
          <span>Target: 2500 km</span>
        </div>
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: `${statsStore.percentageCompleted}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-counter {
  background-color: var(--light-color);
  padding: 3rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.stat-description {
  font-size: 0.9rem;
  opacity: 0.7;
}

.progress-container {
  margin-top: 2rem;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.progress-bar {
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 5px;
  transition: width 1s ease-in-out;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1rem;
  }
  
  .stat-value {
    font-size: 2rem;
  }
}
</style> 