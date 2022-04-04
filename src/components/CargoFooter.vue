<template>
  <footer>
    <div class="container">
      <!-- top header -->
      <div class="row">
        <div v-for="card in arrCards" :key="card.id" class="col">
          <CardFooter :CardTypeFromFooter="typeCard" :ObjCard="card" />
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
  methods: {
    buildArrCards(strTypeCard) {
      if (strTypeCard === 'type1') {
        this.typeCard = strTypeCard;
        this.arrCards = [
          {
            pretitle: 'pretitolo1',
            title: null,
            icon: 'fa-truck-ramp-box',
            p1: 'A functional html lorem bral conteru dtru',
            p2: 'lorem1.2',
            iconPositioned: 'fa-arrow-right',
            button: true,
            logo: true,
          },
          {
            pretitle: 'pretitolo2',
            title: 'About',
            icon: 'fa-temperature-low',
            p1: null,
            p2: null,
            iconPositioned: null,
            button: false,
            logo: false,
            links: [
              {
                id: '1.1',
                text: 'The Company',
              },
              {
                id: '1.2',
                text: 'Institution',
              },
              {
                id: '1.3',
                text: 'Socials & Events',
              },
              {
                id: '1.4',
                text: 'Innovation',
              },
              {
                id: '1.5',
                text: 'Enviroment',
              },
              {
                id: '1.6',
                text: 'Technology',
              },
            ],
          },
          {
            pretitle: 'pretitolo3',
            title: 'Transport',
            icon: 'fa-boxes-stacked',
            p1: null,
            p2: null,
            iconPositioned: null,
            button: false,
            logo: false,
            links: [
              {
                id: '1.1',
                text: 'The Company',
              },
              {
                id: '1.2',
                text: 'Institution',
              },
              {
                id: '1.3',
                text: 'Socials & Events',
              },
              {
                id: '1.4',
                text: 'Innovation',
              },
              {
                id: '1.5',
                text: 'Enviroment',
              },
              {
                id: '1.6',
                text: 'Technology',
              },
            ],
          },
          {
            pretitle: 'pretitolo3',
            title: 'Support',
            icon: null,
            p1: null,
            p2: null,
            iconPositioned: null,
            button: false,
            logo: false,
            links: [
              {
                id: '1.1',
                text: 'The Company',
              },
              {
                id: '1.2',
                text: 'Institution',
              },
              {
                id: '1.3',
                text: 'Socials & Events',
              },
              {
                id: '1.4',
                text: 'Innovation',
              },
              {
                id: '1.5',
                text: 'Enviroment',
              },
              {
                id: '1.6',
                text: 'Technology',
              },
            ],
          },
        ];
      } if (strTypeCard === 'type2') {
        this.typeCard = strTypeCard;
        this.arrCards = [
          {
            pretitle: 'pretitolo1type2',
            title: 'titolo1type2',
            icon: '',
            p1: 'lorem1.1type2',
            p2: 'lorem1.2type2',
            iconPositioned: 'fa-quote-right',
          },
          {
            pretitle: 'pretitolo2type2',
            title: 'titolo2type2',
            icon: '',
            p1: 'lorem2.1type2',
            p2: 'lorem2.2type2',
            iconPositioned: 'fa-quote-right',

          },
          {
            pretitle: 'pretitolo3type2',
            title: 'titolo3type2',
            icon: '',
            p1: 'lorem3.1type2',
            p2: 'lorem3.2type2',
            iconPositioned: 'fa-quote-right',
          },
        ];
      }
    },
  },
  created() {
    this.buildArrCards('type1');
  },
};
</script>

<style>

</style>
