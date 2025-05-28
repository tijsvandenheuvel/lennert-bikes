<script setup>
// Geen speciale logica nodig voor deze view
// In een latere versie zouden we hier API calls kunnen doen voor updates
</script>

<template>
  <div class="updates">
    <!-- Header section -->
    <section class="section-header bg-light">
      <div class="container">
        <h1>Journey Updates</h1>
        <p class="lead">
          Follow Lennert's 2500km journey from Thessaloniki to Ararat. Track his progress, view photos, and read stories from the road.
        </p>
      </div>
    </section>

    <!-- Map section with Polarsteps embed -->
    <section class="section">
      <div class="container">
        <h2>Live Route Tracking</h2>
        <div class="map-container">
          <!-- Polarsteps Embed Placeholder -->
          <iframe width="100%" height="500" src="https://www.polarsteps.com/LennertCarmen/17083263-expedition-sunrise/embed"></iframe>
          
          <div class="map-details">
            <div class="detail-item">
              <h4>Start</h4>
              <p>Thessaloniki, Greece</p>
            </div>
            <div class="detail-item">
              <h4>Destination</h4>
              <p>Mount Ararat</p>
            </div>
            <div class="detail-item">
              <h4>Total Distance</h4>
              <p>~2500 kilometers</p>
            </div>
            <div class="detail-item">
              <h4>Estimated Duration</h4>
              <p>1 month</p>
            </div>
          </div>
        </div>
        
        <div class="map-note">
          <p>
            For more detailed and interactive tracking, you can also follow the journey directly on 
            <a href="https://www.polarsteps.com/LennertCarmen/17083263-expedition-sunrise/" target="_blank" class="text-link">Polarsteps</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Updates section -->
    <section class="section bg-light">
      <div class="container">
        <h2>Latest Updates</h2>
        <div class="updates-list">
          <!-- Placeholder for future updates - will be replaced with real content -->
          <div class="update-card coming-soon">
            <div class="update-content">
              <h3>The Journey Is About To Begin</h3>
              <p class="update-date">Coming Soon</p>
              <p>
                Preparations are underway for the journey from Thessaloniki to Ararat. Check back soon for the first updates from the road!
              </p>
              <p>
                This page will be regularly updated with new stories, photos, and progress reports throughout the journey.
              </p>
            </div>
          </div>
          
          <!-- Example of what future updates will look like -->
          <div class="update-card example">
            <div class="update-header">
              <span class="update-label">Example Update</span>
            </div>
            <div class="update-image">
              <img src="https://via.placeholder.com/800x400" alt="Example update image" class="rounded-image">
            </div>
            <div class="update-content">
              <h3>Crossing the Border into [Country]</h3>
              <p class="update-date">Day X - Month XX, 202X</p>
              <p>
                This is an example of what update posts will look like. Each update will include photos from the journey, details about the route, interesting encounters, and current progress.
              </p>
              <p>
                Updates will be added regularly throughout the journey, so be sure to check back often to follow Lennert's adventure from Thessaloniki to Ararat.
              </p>
              <div class="update-stats">
                <div class="stat">
                  <span class="stat-label">Distance today</span>
                  <span class="stat-value">XX km</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Total distance</span>
                  <span class="stat-value">XXX km</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Elevation gain</span>
                  <span class="stat-value">XXX m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter signup -->
    <section class="section">
      <div class="container">
        <div class="newsletter-box">
          <h2>Stay Updated</h2>
          <p>
            Check back regularly for new updates or follow on Polarsteps for the most up-to-date information on Lennert's journey.
          </p>
          <div class="social-links">
            <!-- Placeholder for social media links -->
            <p>Social media links will be added here soon.</p>
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

.map-container {
  margin-top: 2rem;
}

.polarsteps-placeholder {
  background-color: var(--light-color);
  border-radius: 8px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.placeholder-message {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
}

.small {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.5rem;
}

.map-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.detail-item {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.detail-item h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.map-note {
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 8px;
}

.text-link {
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.3s;
}

.text-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.updates-list {
  margin-top: 2rem;
}

.update-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.update-card.coming-soon {
  border: 2px dashed #ddd;
  box-shadow: none;
}

.update-card.example {
  position: relative;
}

.update-header {
  background-color: var(--light-color);
  padding: 0.5rem 1rem;
}

.update-label {
  display: inline-block;
  background-color: var(--secondary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.update-image img {
  width: 100%;
  height: auto;
  display: block;
}

.update-content {
  padding: 2rem;
}

.update-date {
  color: var(--primary-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.update-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 0.8rem;
  opacity: 0.7;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--dark-color);
}

.newsletter-box {
  background-color: var(--primary-color);
  color: white;
  padding: 3rem;
  border-radius: 8px;
  text-align: center;
}

.newsletter-box h2 {
  margin-bottom: 1rem;
}

.newsletter-box p {
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.social-links {
  margin-top: 1.5rem;
}

.rounded-image {
  border-radius: 8px 8px 0 0;
}

@media (max-width: 768px) {
  .section-header {
    padding: 3rem 0;
  }
  
  .polarsteps-placeholder {
    height: 350px;
  }
  
  .newsletter-box {
    padding: 2rem;
  }
}
</style> 