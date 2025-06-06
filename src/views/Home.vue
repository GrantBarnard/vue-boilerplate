<template>
  <div class="container py-5">
    <h1 class="mb-4">Vue Boilerplate</h1>
    <h3 class="font-secondary mb-5">A modern starting point for Vue.js projects with Bootstrap &amp; SCSS</h3>
    <section class="mb-5">
      <h2>What is this?</h2>
      <p>
        This boilerplate provides a clean, scalable foundation for building Vue.js applications. It includes:
      </p>
      <ul>
        <li>Vue 3 with &lt;script setup&gt; syntax</li>
        <li>Bootstrap 5 (customizable via SCSS overrides)</li>
        <li>SCSS with a BEM-inspired folder structure</li>
        <li>Pre-configured routing and basic layout</li>
        <li>Example components and style guide</li>
      </ul>
    </section>
    <section class="mb-5">
      <h2>How to Use</h2>
      <ol>
        <li>Clone or download this repository.</li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Start developing: <code>npm run dev</code></li>
        <li>Edit <code>src/views</code>, <code>src/components</code>, and <code>src/scss</code> to build your app.</li>
      </ol>
    </section>
    <section class="mb-5">
      <h2>Folder Structure</h2>
      <pre>
src/
  components/
  scss/
    components/
    global/
    nav/
    typo/
    variables/
  views/
      </pre>
    </section>
    <section>
      <h2>Customization</h2>
      <ul>
        <li>Override Bootstrap variables in <code>src/scss/global/global.scss</code></li>
        <li>Define your own SCSS variables in <code>src/scss/variables/variables.scss</code></li>
        <li>Use the <router-link to="/page">Style Guide</router-link> for a quick reference of styles and variables.</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
// No logic needed for this page
</script>