<!-- teamplate sezioni 'main services' e 'trusted feedback'  -->
<template>
  <section class="bg_dark text-white"
  :id="this.SectionVersionFromMain == 'V1' ? 'section3' : 'section5' ">
    <div class="container">
      <div class="row align-content-center"
      :class="this.SectionVersionFromMain == 'V2' ? 'text-center' : '' ">
        <div class="col-12">
          <small class="pretitle">{{ this.objSection.pretitle }}</small>
          <h2 class="title">
            <span class="fw-bolder">{{ this.objSection.title.word1 }} </span>
            <span class="bg_word text-white">{{ this.objSection.title.word2 }}</span>
          </h2>
        </div>
        <div :class="this.SectionVersionFromMain == 'V2' ? 'col-12 text-center' : 'col-9' ">
          <p class="mb-5">{{ this.objSection.p }}</p>
        </div>
        <div class="btn_box col-3">
          <button v-show="this.SectionVersionFromMain == 'V1'"
          class="btn btn-outline-primary">
          SEE ALL
          </button>
        </div>
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
            title: 'Technology',
            icon: 'fa-truck-ramp-box',
            p1: 'We are continually focused on developing technology solutions adapted to our clients needs.',
            p2: 'lorem1.2',
            iconPositioned: 'fa-arrow-right',
          },
          {
            pretitle: 'pretitolo2',
            title: 'Refeer Cargo',
            icon: 'fa-temperature-low',
            p1: 'Regular and frequent monitoring from the receipt of the loaded container to the final destination.',
            p2: 'lorem2.2',
            iconPositioned: 'fa-arrow-right',

          },
          {
            pretitle: 'pretitolo3',
            title: 'Dry Cargo',
            icon: 'fa-boxes-stacked',
            p1: 'We work with most types of dry cargo, from valuable cargo to thr most dangerous requiring care.',
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
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus, libero aspernatur mollitia dolor qui. Corporis natus, libero aspernatur mollitia.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            iconPositioned: 'fa-quote-right',
          },
          {
            pretitle: 'pretitolo2type2',
            title: 'titolo2type2',
            icon: logo2,
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus, libero aspernatur mollitia dolor qui. Corporis natus, libero aspernatur mollitia.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            iconPositioned: 'fa-quote-right',

          },
          {
            pretitle: 'pretitolo3type2',
            title: 'titolo3type2',
            icon: logo3,
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus, libero aspernatur mollitia dolor qui. Corporis natus, libero aspernatur mollitia.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
          p: 'With all of this expertise and capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develop a productive, long-term partnership.',
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
    p {
      color: $color--text1;
    }
    .btn_box {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
    }
  }
</style>
