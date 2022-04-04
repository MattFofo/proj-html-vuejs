<template>
  <footer>
    <div class="container">
      <!-- top header -->
      <div class="row">
        <div class="col">
          <CardFooter :CardTypeFromFooter="'type1'" />
        </div>
      </div>
      <!-- bot header -->
      <div class="row"></div>
    </div>
  </footer>
</template>

<script>
import CardFooter from './CardFooter.vue';

export default {
  name: 'CargoFooter',
  components: {
    CardFooter,
  },
  data() {
    return {
      typeCard: '',
      arrCards: [],
    };
  },
};
</script>

<style>

</style>
