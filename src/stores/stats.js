import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStatsStore = defineStore('stats', () => {
  // State
  const distanceKm = ref(0)
  const sponsorCount = ref(0)
  const amountPerKm = ref(0)

  // Computed
  const totalPledged = computed(() => {
    return parseFloat((amountPerKm.value * (distanceKm.value / 100)).toFixed(2))
  })

  const percentageCompleted = computed(() => {
    // Assuming the total trip is about 2500 km
    return Math.min(100, Math.round((distanceKm.value / 2500) * 100))
  })

  // Actions
  function updateStats(newStats) {
    if (newStats.distanceKm !== undefined) {
      distanceKm.value = newStats.distanceKm
    }
    if (newStats.sponsorCount !== undefined) {
      sponsorCount.value = newStats.sponsorCount
    }
    if (newStats.amountPerKm !== undefined) {
      amountPerKm.value = newStats.amountPerKm
    }
  }

  // Mock function for now, will be replaced with API call
  async function fetchStats() {
    // In a real app, this would be an API call
    // For now, just mock some data
    const mockStats = {
      distanceKm: 250, // Some distance already traveled
      sponsorCount: 15,
      amountPerKm: 5.75, // Average amount per 100km
    }
    
    updateStats(mockStats)
    return mockStats
  }

  return {
    // State
    distanceKm,
    sponsorCount,
    amountPerKm,
    
    // Computed
    totalPledged,
    percentageCompleted,
    
    // Actions
    updateStats,
    fetchStats
  }
}) 