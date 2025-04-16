<script setup>
// Geen speciale logica nodig
</script>

<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <RouterLink to="/" class="btn btn-primary">Back to Home</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
}

.not-found-content {
  max-width: 600px;
  margin: 0 auto;
}

.not-found h1 {
  font-size: 6rem;
  color: var(--primary-color);
  margin-bottom: 0;
}

.not-found h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.not-found p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
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
</style> 