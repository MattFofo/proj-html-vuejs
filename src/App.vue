<template>
  <div id="app">
    <CargoHeader />
    <CargoMain />
    <CargoFooter />
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
};
</script>

<style lang="scss">
  @import 'bootstrap';
</style>
