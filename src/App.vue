<template>
  <div id="app">
    <CargoHeader />
    <CargoMain />
    <CargoFooter />
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

  .scroll_top {
    position: fixed;
    padding: 1rem;
    margin: 1rem;
    right: 0;
    bottom: 0;
    z-index: 200;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: $color--text1;
    max-width: 1980px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .2;
    cursor: pointer;
    .fa-arrow-up {
      font-size: 1.4rem;
    }
  }
  .scroll_top:hover {
    opacity: 1;
  }
</style>
