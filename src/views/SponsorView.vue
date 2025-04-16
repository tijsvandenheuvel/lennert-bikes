<script setup>
// Geen speciale logica nodig voor deze view
</script>

<template>
  <div class="sponsor">
    <!-- Header section -->
    <section class="section-header bg-light">
      <div class="container">
        <h1>Sponsor the Journey</h1>
        <p class="lead">
          For every 100km Lennert cycles from Thessaloniki to Ararat, your pledge will help Kurdish communities rebuild after the earthquake.
        </p>
      </div>
    </section>

    <!-- Sponsorship Form section -->
    <section class="section">
      <div class="container">
        <div class="form-grid">
          <div class="form-info">
            <h2>How Your Sponsorship Works</h2>
            <p>
              By sponsoring this journey, you'll be contributing to Kurdish rebuilding efforts. Here's how it works:
            </p>
            <ul class="info-list">
              <li>
                <strong>Choose your amount per 100km</strong> - You decide how much to pledge for every 100km of the journey.
              </li>
              <li>
                <strong>No immediate payment needed</strong> - You're making a pledge now, not a payment.
              </li>
              <li>
                <strong>Follow Lennert's progress</strong> - Track the journey and see how far he's cycled.
              </li>
              <li>
                <strong>Payment after completion</strong> - At the end of the journey, you'll be contacted with the total amount based on the distance cycled.
              </li>
            </ul>
            <p>
              <strong>Example:</strong> If you pledge €5 per 100km and Lennert completes the 2500km journey, your total contribution would be €125.
            </p>
            
            <div class="cause-info">
              <h3>The Cause</h3>
              <p>
                The funds raised will go directly to supporting Kurdish communities affected by the earthquake. The specific organization will be announced soon.
              </p>
            </div>
          </div>
          
          <div class="form-container">
            <h2>Sponsor Form</h2>
            <!-- Google Forms Embed -->
            <!-- Note: In a real implementation, you would replace this with an actual Google Forms embed code -->
            <div class="google-form-embed">
              <p class="form-placeholder">
                Google Form will be embedded here. For now, this is a placeholder as we don't have the actual Google Form URL yet.
              </p>
              <p class="form-placeholder-note">
                The form will collect: Name, Email, Amount per 100km, and an optional message.
              </p>
              
              <!-- Mockup of what the form will look like -->
              <div class="form-mockup">
                <div class="form-group">
                  <label for="name">Your Name (Optional)</label>
                  <input type="text" id="name" placeholder="Enter your name">
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                  <label for="amount">Amount per 100km (€) *</label>
                  <input type="number" id="amount" placeholder="e.g. 5" min="1" required>
                </div>
                <div class="form-group">
                  <label for="message">Message (Optional)</label>
                  <textarea id="message" placeholder="Any message for Lennert?"></textarea>
                </div>
                <button class="btn btn-primary form-button">Submit Pledge</button>
                <p class="form-note">* This is a mockup. The actual form will be implemented soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-light">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>When do I need to pay?</h3>
            <p>You don't need to pay anything now. You're making a pledge that you'll contribute based on the distance cycled. After the journey is completed, you'll be contacted with the final amount and payment details.</p>
          </div>
          <div class="faq-item">
            <h3>What if Lennert doesn't complete the entire journey?</h3>
            <p>Your contribution will be based on the actual distance cycled. For example, if Lennert cycles 2000km instead of the planned 2500km, your pledge will be calculated based on 2000km.</p>
          </div>
          <div class="faq-item">
            <h3>Which organization will receive the donations?</h3>
            <p>We are currently finalizing the details with potential Kurdish organizations. The specific beneficiary will be announced soon, and all sponsors will be informed.</p>
          </div>
          <div class="faq-item">
            <h3>Can I make a one-time donation instead?</h3>
            <p>Yes, in the future we plan to add direct donation options. For now, we're focusing on per-kilometer sponsorships to encourage following the journey.</p>
          </div>
          <div class="faq-item">
            <h3>How will I know how far Lennert has cycled?</h3>
            <p>You can follow the journey on the Updates page, where we'll regularly post the current distance, route maps, and stories from the road.</p>
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

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.info-list {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.info-list li {
  margin-bottom: 1rem;
}

.cause-info {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(52, 152, 219, 0.1);
  border-left: 4px solid var(--primary-color);
  border-radius: 4px;
}

.form-container {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.google-form-embed {
  margin-top: 1.5rem;
}

.form-placeholder {
  text-align: center;
  padding: 2rem;
  background-color: var(--light-color);
  border-radius: 4px;
  margin-bottom: 1rem;
}

.form-placeholder-note {
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 2rem;
}

.form-mockup {
  border: 1px dashed #ccc;
  padding: 1.5rem;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.form-button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
}

.form-note {
  text-align: center;
  font-size: 0.8rem;
  margin-top: 1rem;
  font-style: italic;
  opacity: 0.7;
}

.faq-list {
  margin-top: 2rem;
}

.faq-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item h3 {
  color: var(--dark-color);
  margin-bottom: 0.5rem;
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

@media (max-width: 992px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .form-info {
    order: 2;
  }
  
  .form-container {
    order: 1;
  }
}

@media (max-width: 768px) {
  .section-header {
    padding: 3rem 0;
  }
}
</style> 