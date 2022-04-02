<!-- teamplate sezioni 'main services' e 'trusted feedback'  -->
<template>
  <section class="bg-dark text-white">
    <div class="container">
      <div class="row align-content-center">
        <div class="col-12">
          <small>pretitolo</small>
          <h1>TITOLO TITOLO</h1>
        </div>
        <div class="col-7">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-3">
          <button class="btn btn-outline-primary">SEE ALL</button>
        </div>
        <!-- inserire blocco cards al posto dei bottoni -->
        <!-- <div class="col-8">
          <button class="btn btn-primary">GET IN TOUCH</button>
          <button class="btn btn-outline-primary">READ MORE</button>
        </div> -->
      </div>
      <div class="row">
        <div v-for="i in 3" :key="i" class="col">
          <CargoCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CargoCard from './CargoCard.vue';

export default {
  name: 'SectionType2',
  components: {
    CargoCard,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';

  section {
    padding-top: $height--header;
  }
</style>
