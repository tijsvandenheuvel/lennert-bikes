<script setup>
import StatsCounter from '@/components/StatsCounter.vue'
</script>

<template>
  <div class="home">
    <!-- Hero section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Cycling for Sirkhane</h1>
          <p class="hero-rsubtitle">
            Join Lennert on a 2500km cycling adventure from Thessaloniki to Ararat, supporting Sirkhane's mission to bring joy, creativity, and hope to children in challenging circumstances.
          </p>
          <div class="hero-cta">
            <RouterLink to="/sponsor" class="btn btn-primary">Support Sirkhane</RouterLink>
            <RouterLink to="/updates" class="btn btn-outline">Follow the Journey</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Counter -->
    <!-- <StatsCounter /> -->

    <!-- Sirkhane Cause section -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2>About <a href="https://sirkhane.org" target="_blank" rel="noopener" style="color: var(--dark-color); text-decoration: underline;">Sirkhane</a></h2>
            <p>
              Sirkhane is a social circus school founded in 2012 in a region where it is difficult to be a child. Sirkhane's mission is to provide a safe, friendly and embracing environment for children, who are affected by conflicts. We replace their damaged childhood with joy and enrich the children's imagination using the magic of social circus pedagogy.
            </p>
            <br>
            <p>
              Children have the opportunity to collaborate and form friendships with one another, beyond gender, social and cultural differences. In doing so, they manifest peace, harmony, open mindedness and cheerfulness in their local and global communities.
            </p>
            <br>
            <p>
              Sirkhane is carrying out activities in Turkey and Iraq, serving children through Sirkhane centers located in Mardin province and to rural areas of Mardin province through mobile units.
            </p>
          </div>
          <div class="about-image">
            <a href="https://sirkhane.org" target="_blank" rel="noopener">
              <img src="@/assets/sirkhane.png" alt="Sirkhane social circus school" class="rounded-image">
            </a>
            <p class="image-caption">Sirkhane: Social Circus for Children</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About section -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content personal-letter">
            <div class="letter-quote-mark">“</div>
            <h2 class="letter-title">Hallo lieve allemaal. </h2>
            <div class="letter-body">
              <p>
                Halverwege mijn reis vraag ik jullie om steun en om motivatie.
              </p>
              <br>
              <p>
                Vertrokken in Thessaloniki (waar ik twee jaar geleden ben teruggedraaid naar België) fiets ik nu richting
                de zonsopgang, in zuidoostelijke richting door het onherbergzaam Anatoliaans landschap.
              </p>
              <br>
              <p>
                Deze tocht leerde me al dat wanneer de omstandigheden zwaar worden, de mensen des te behulpzamer.
                Ik zou graag iets teruggeven aan de gemeenschap waar ik tijdelijk deel van uitmaak en die me al zoveel
                geleerd heeft.
              </p>
              <br>
              <p>
                Weldra fiets ik richting Mardin, waar de organisatie Sirkhane kinderen inspireert en begeleidt in circus,
                muziek en fotografie. Ze werken met kinderen van verschillende leeftijden en maken geen onderscheid of ze
                Koerdisch, Turks, Armeens of Syrisch zijn.
              </p>
              <br>
              <p>
                Geef me een duwtje in de rug en steun deze organisatie door een bedrag te doneren per 100km die ik fiets.
                Zo berekenen we samen aan het einde van mijn rit hoeveel we integraal aan Sirkhane zullen schenken.
              </p>
              <br>
              <p>
                Ik dank jullie,
                de kinderen van Sirkhane danken jullie,
              </p>
              <br>
              <p class="letter-signature">
                Liefs, Lennert
              </p>
            </div>
            <div class="letter-quote-mark end">”</div>
            <RouterLink to="/sponsor" class="text-link">Learn how you can help →</RouterLink>
          </div>
          <div class="about-image">
            <img src="@/assets/lennert_fiets1.jpg" alt="Lennert preparing for the cycling journey"
              class="rounded-image">
            <p class="image-caption">Preparing for the journey</p>
            <img src="@/assets/lennert_fiets4.jpeg" alt="Lennert on the road, mirror photo" class="rounded-image mt-1">
            <p class="image-caption">On the road: a moment of reflection</p>
          </div>
        </div>
      </div>
    </section>

    <div class="video-responsive">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VXbGyJ6NQDI?si=wbhrDBDDymgFsopu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <!-- How it works -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center">How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Sponsor Per 100km</h3>
            <p>Choose an amount to pledge for every 100km of the journey. For example, €0,50 per 100km would mean a total
              of about €12,50 for the entire journey.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Follow the Progress</h3>
            <p>Track the journey through regular updates, photos, and route information as Lennert makes his way from
              Thessaloniki to Ararat.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Make a Difference</h3>
            <p>At the end of the journey, you'll be contacted with the final amount based on the distance covered. Your contribution goes directly to Sirkhane Social Circus School.</p>
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
            <p>Follow my journey through the Polarsteps app or check the updates page for the latest news, photos, and
              stories from the road.</p>
            <RouterLink to="/updates" class="text-link">View all updates →</RouterLink>
          </div>
          <div class="update-map">

              <iframe width="100%" height="400"
              src="https://www.polarsteps.com/LennertCarmen/17083263-expedition-sunrise/embed"></iframe>
              
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1600x900') no-repeat center center; */
  background-size: cover;
  color: white;
  padding: 6rem 0;
  text-align: center;
  background-image: url('@/assets/sirkhane2.jpg');
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: 0 80%;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 5rem;
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
  margin-top: 1rem;
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

  .about-grid,
  .update-teaser {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-content,
  .about-image {
    order: 0;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero {
    padding: 4rem 0;
  }
}

.personal-letter {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-style: italic;
  background: #fcf9e7;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 2.5rem 2rem 2rem 2rem;
  position: relative;
}
.letter-title {
  font-family: inherit;
  font-style: normal;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #444;
  text-align: left;
}
.letter-body p {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  line-height: 1.8;
}
.letter-signature {
  font-family: 'Dancing Script', cursive, 'Georgia', serif;
  font-size: 1.3rem;
  margin-top: 2rem;
  font-style: normal;
  color: #222;
}
.letter-quote-mark {
  font-size: 4rem;
  color: #e0cfa4;
  position: absolute;
  left: 1.2rem;
  top: 0.5rem;
  font-family: serif;
  line-height: 1;
  z-index: 1;
  user-select: none;
}
.letter-quote-mark.end {
  left: unset;
  right: 1.2rem;
  top: unset;
  bottom: 0.5rem;
  transform: rotateY(180deg);
}
@media (max-width: 768px) {
  .personal-letter {
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
  }
  .letter-quote-mark, .letter-quote-mark.end {
    font-size: 2.5rem;
    left: 0.5rem;
    right: 0.5rem;
  }
}

.video-responsive {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin: 2rem auto;
  max-width: 90%;
}

.video-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
</style>