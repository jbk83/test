<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

h1 {
  color: #0d5d65;
}

#app {
  font-family: 'Georgia', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  margin: auto;
  margin-bottom: 50px;
  max-width: 1000px;
  padding: 50px 20px 0;
}
</style>
