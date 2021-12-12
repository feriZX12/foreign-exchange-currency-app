<template>
  <div id="app">
    <app-header />
    <exchange-rates />
    <app-footer />
  </div>
</template>

<script>
import ExchangeRates from './components/ExchangeRates.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    ExchangeRates,
    AppHeader,
    AppFooter
  },
  created() {
    document.title = 'Exchange Rates'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
