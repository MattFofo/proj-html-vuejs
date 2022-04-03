<!-- teamplate sezioni 'main services' e 'trusted feedback'  -->
<template>
  <section class="bg-dark text-white">
    <div class="container">
      <div class="row align-content-center"
      :class="this.sectionVersion == 'V2' ? 'text-center' : '' ">
        <div class="col-12">
          <small>pretitolo</small>
          <h1>TITOLO TITOLO</h1>
        </div>
        <div :class="this.sectionVersion == 'V2' ? 'col-12 text-center' : 'col-7' ">
          <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="btn_box col-5">
          <button v-show="this.sectionVersion == 'V1'"
          class="btn btn-outline-primary">
          SEE ALL
          </button>
        </div>
        <!-- inserire blocco cards al posto dei bottoni -->
        <!-- <div class="col-8">
          <button class="btn btn-primary">GET IN TOUCH</button>
          <button class="btn btn-outline-primary">READ MORE</button>
        </div> -->
      </div>
      <div class="row">
        <div v-for="card in arrCards" :key="card.title" class="col">
          <CargoCard :card-type-from-main="CardTypeFromMain" :obj-card="card" />
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
  props: {
    SectionVersionFromMain: String,
    CardTypeFromMain: String,
  },
  data() {
    return {
      sectionVersion: '',
      arrCards: [],
    };
  },
  created() {
    this.sectionVersion = this.SectionVersionFromMain;
    if (this.CardTypeFromMain === 'type1') {
      this.arrCards = [
        {
          pretitle: 'pretitolo1',
          title: 'titolo1',
          p1: 'lorem1.1',
          p2: 'lorem1.2',
        },
        {
          pretitle: 'pretitolo2',
          title: 'titolo2',
          p1: 'lorem2.1',
          p2: 'lorem2.2',

        },
        {
          pretitle: 'pretitolo3',
          title: 'titolo3',
          p1: 'lorem3.1',
          p2: 'lorem3.2',
        },
      ];
    } else {
      this.arrCards = [
        {
          pretitle: 'pretitolo1type2',
          title: 'titolo1type2',
          p1: 'lorem1.1type2',
          p2: 'lorem1.2type2',
        },
        {
          pretitle: 'pretitolo2type2',
          title: 'titolo2type2',
          p1: 'lorem2.1type2',
          p2: 'lorem2.2type2',

        },
        {
          pretitle: 'pretitolo3type2',
          title: 'titolo3type2',
          p1: 'lorem3.1type2',
          p2: 'lorem3.2type2',
        },
      ];
    }
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';

  section {
    padding-top: $height--header;
    padding-bottom: $height--header;
    .btn_box {
      display: flex;
      justify-content: end;
      align-items: baseline;
    }
  }
</style>
