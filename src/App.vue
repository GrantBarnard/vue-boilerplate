<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
    NavBar
  }
}
</script>