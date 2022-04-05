<!-- teamplate sezioni 'main services' e 'trusted feedback'  -->
<template>
  <section class="bg-dark text-white"
  :id="this.SectionVersionFromMain == 'V1' ? 'section3' : 'section5' ">
    <div class="container">
      <div class="row align-content-center"
      :class="this.SectionVersionFromMain == 'V2' ? 'text-center' : '' ">
        <div class="col-12">
          <small>{{ this.objSection.pretitle }}</small>
          <h1>
            <span>{{ this.objSection.title.word1 }} </span>
            <span class="bg_word">{{ this.objSection.title.word2 }}</span>
          </h1>
        </div>
        <div :class="this.SectionVersionFromMain == 'V2' ? 'col-12 text-center' : 'col-7' ">
          <p class="mb-5">{{ this.objSection.p }}</p>
        </div>
        <div class="btn_box col-5">
          <button v-show="this.SectionVersionFromMain == 'V1'"
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
          <CargoCard :card-type-from-main="typeCard" :obj-card="card" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CargoCard from './CargoCard.vue';
import logo1 from '../assets/img/logo-1.png';
import logo2 from '../assets/img/logo-2.png';
import logo3 from '../assets/img/logo-3.png';

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
      typeCard: '',
      arrCards: [],
      objSection: {},
    };
  },
  methods: {
    buildArrCards(strTypeCard) {
      if (strTypeCard === 'type1') {
        this.typeCard = strTypeCard;
        this.arrCards = [
          {
            pretitle: 'pretitolo1',
            title: 'titolo1',
            icon: 'fa-truck-ramp-box',
            p1: 'lorem1.1',
            p2: 'lorem1.2',
            iconPositioned: 'fa-arrow-right',
          },
          {
            pretitle: 'pretitolo2',
            title: 'titolo2',
            icon: 'fa-temperature-low',
            p1: 'lorem2.1',
            p2: 'lorem2.2',
            iconPositioned: 'fa-arrow-right',

          },
          {
            pretitle: 'pretitolo3',
            title: 'titolo3',
            icon: 'fa-boxes-stacked',
            p1: 'lorem3.1',
            p2: 'lorem3.2',
            iconPositioned: 'fa-arrow-right',
          },
        ];
      } if (strTypeCard === 'type2') {
        this.typeCard = strTypeCard;
        this.arrCards = [
          {
            pretitle: 'pretitolo1type2',
            title: 'titolo1type2',
            icon: logo1,
            p1: 'lorem1.1type2',
            p2: 'lorem1.2type2',
            iconPositioned: 'fa-quote-right',
          },
          {
            pretitle: 'pretitolo2type2',
            title: 'titolo2type2',
            icon: logo2,
            p1: 'lorem2.1type2',
            p2: 'lorem2.2type2',
            iconPositioned: 'fa-quote-right',

          },
          {
            pretitle: 'pretitolo3type2',
            title: 'titolo3type2',
            icon: logo3,
            p1: 'lorem3.1type2',
            p2: 'lorem3.2type2',
            iconPositioned: 'fa-quote-right',
          },
        ];
      }
    },
    buildObjSection(strVersionSection) {
      if (strVersionSection === 'V1') {
        this.objSection = {
          title: {
            word1: 'MAIN',
            word2: 'SERVICES',
          },
          pretitle: 'ROAD TRANSPORT',
          p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni nihil tempore dolorem culpa rem veritatis.',
        };
      } if (strVersionSection === 'V2') {
        this.objSection = {
          title: {
            word1: 'TRUSTED',
            word2: 'FEEDBACK',
          },
          pretitle: 'WHAT ARE WE DOING',
          p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. aborum magni nihil tempore dolorem culpa rem veritatis.',
        };
      }
    },
  },
  created() {
    this.buildArrCards(this.CardTypeFromMain);
    this.buildObjSection(this.SectionVersionFromMain);
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/utility.scss';

  section {
    padding-top: $height--header;
    padding-bottom: $height--header;
    max-width: 1980px;
    margin: auto;
    .btn_box {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
    }
  }
</style>
