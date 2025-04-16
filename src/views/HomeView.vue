<script setup>
import StatsCounter from '@/components/StatsCounter.vue'
</script>

<template>
  <div class="home">
    <!-- Hero section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Cycling for Kurdish Rebuilding</h1>
          <p class="hero-subtitle">
            Join Lennert's 2500km journey from Thessaloniki to Ararat and help rebuild Kurdish communities affected by the earthquake.
          </p>
          <div class="hero-cta">
            <RouterLink to="/sponsor" class="btn btn-primary">Sponsor Now</RouterLink>
            <RouterLink to="/updates" class="btn btn-outline">Follow the Journey</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Counter -->
    <StatsCounter />

    <!-- About section -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2>About the Journey</h2>
            <p>
              In the aftermath of the devastating earthquake that hit the Kurdish region, I decided to embark on a cycling journey from Thessaloniki to Ararat – a distance of approximately 2500 kilometers.
            </p>
            <p>
              For every 100km I cycle, you can pledge an amount to support the Kurdish rebuilding efforts. Join me in making a difference!
            </p>
            <p>
              The journey will take about a month, crossing through breathtaking landscapes and diverse cultures. Follow my updates to experience the journey with me.
            </p>
            <RouterLink to="/sponsor" class="text-link">Learn how you can help →</RouterLink>
          </div>
          <div class="about-image">
            <img src="https://via.placeholder.com/500x300" alt="Cycling through mountains" class="rounded-image">
            <p class="image-caption">Preparing for the journey</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center">How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Sponsor Per 100km</h3>
            <p>Choose an amount to pledge for every 100km of the journey. For example, €5 per 100km would mean a total of about €125 for the entire journey.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Follow the Progress</h3>
            <p>Track the journey through regular updates, photos, and route information as Lennert makes his way from Thessaloniki to Ararat.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Make a Difference</h3>
            <p>At the end of the journey, you'll be contacted with the final amount based on the distance covered. Your contribution goes directly to Kurdish rebuilding efforts.</p>
          </div>
        </div>
        <div class="text-center mt-2">
          <RouterLink to="/sponsor" class="btn btn-primary">Become a Sponsor</RouterLink>
        </div>
      </div>
    </section>

    <!-- Latest update teaser -->
    <section class="section">
      <div class="container">
        <h2>Latest from the Journey</h2>
        <div class="update-teaser">
          <div class="update-content">
            <h3>Starting the Adventure</h3>
            <p class="update-date">Coming Soon</p>
            <p>Follow my journey through the Polarsteps app or check the updates page for the latest news, photos, and stories from the road.</p>
            <RouterLink to="/updates" class="text-link">View all updates →</RouterLink>
          </div>
          <div class="update-map">
            <!-- This will be replaced with the Polarsteps embed -->
            <div class="map-placeholder">
              <p>Route Map Coming Soon</p>
              <p class="small">The journey will begin soon. Check back for live tracking!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1600x900') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-content {
  order: 1;
}

.about-image {
  order: 2;
}

.rounded-image {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-caption {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;
  font-style: italic;
  opacity: 0.8;
}

.text-link {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 600;
  margin-top: 1rem;
  text-decoration: none;
  transition: opacity 0.3s;
}

.text-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.bg-light {
  background-color: var(--light-color);
}

.text-center {
  text-align: center;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.step-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.step-number {
  background-color: var(--primary-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

.update-teaser {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.update-date {
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.map-placeholder {
  background-color: var(--light-color);
  border-radius: 8px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.small {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.5rem;
}

@media (max-width: 992px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .about-grid, .update-teaser {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-content, .about-image {
    order: 0;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero {
    padding: 4rem 0;
  }
}
</style> 