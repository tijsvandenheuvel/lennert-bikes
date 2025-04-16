<script setup>
// Je kunt hier eventueel props of andere logica definiëren
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h3>Lennert Bikes</h3>
          <p>Thessaloniki → Ararat</p>
          <p class="footer-slogan">Cycling for Kurdish Rebuilding</p>
        </div>
        
        <div class="footer-nav">
          <h4>Navigation</h4>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/sponsor">Sponsor</RouterLink>
          <RouterLink to="/updates">Updates</RouterLink>
        </div>
        
        <div class="footer-contact">
          <h4>Contact</h4>
          <p>
            <!-- Dit zou uiteindelijk een contactpersoon email moeten worden -->
            <a href="mailto:contact@example.com">contact@example.com</a>
          </p>
          <!-- Sociale media links kunnen hier komen -->
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Lennert Bikes. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--dark-color);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-logo h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.footer-slogan {
  opacity: 0.8;
  font-style: italic;
  margin-top: 0.5rem;
}

.footer-nav, .footer-contact {
  display: flex;
  flex-direction: column;
}

.footer-nav h4, .footer-contact h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-nav a, .footer-contact a {
  color: white;
  margin-bottom: 0.5rem;
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-nav a:hover, .footer-contact a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.footer-bottom {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-nav, .footer-contact {
    align-items: center;
  }
}
</style> 