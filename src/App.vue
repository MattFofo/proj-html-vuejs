<template>
  <div id="app">
    <CargoHeader />
    <CargoMain />
    <CargoFooter />

    <!-- bottone scroll senza max width -->
    <div @click="scrollPageTop" @keyup="scrollTop = 0" class="scroll_top" id="scroll_top">
      <font-awesome-icon icon="fa-solid fa-arrow-up" />
    </div>
  </div>
</template>

<script>
import CargoHeader from './components/CargoHeader.vue';
import CargoMain from './components/CargoMain.vue';
import CargoFooter from './components/CargoFooter.vue';

export default {
  name: 'App',
  components: {
    CargoHeader,
    CargoMain,
    CargoFooter,
  },
  methods: {
    scrollPageTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss">
  $primary: #16928E;
  $bg-dark: #111117;
  @import 'bootstrap';
  @import './assets/styles/style.scss';

</style>
