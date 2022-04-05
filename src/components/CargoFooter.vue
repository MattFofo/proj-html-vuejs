<template>
  <footer>
      <!-- top footer -->
    <div class="top_footer bg_dark">
      <div class="container">
        <div class="row">
          <div v-for="card in arrCards" :key="card.id" class="col">
            <CardFooter :CardTypeFromFooter="typeCard" :ObjCard="card" />
          </div>
        </div>
      </div>
    </div>
    <!-- bot footer -->
    <div class="bot_footer">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <p>Enjoy the low price. We are tracking any intention of piracy</p>
          </div>
          <div class="col-6 text-end">
            <p>
              &#169; 2020 NEXGEN is Proudly Powered by <span class="text-primary">Codings.</span>
              </p>
          </div>
        </div>
      </div>
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
            p1: 'A functional html Template for Corporate & Business',
            p2: 'lorem1.2',
            iconPositioned: 'fa-arrow-right',
            button: true,
            logo: true,
            bg: 'bg_none',
            pd: 'p-0',
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
            bg: 'bg_card',
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
            bg: 'bg_card',
            links: [
              {
                id: '1.1',
                text: 'Industrialized',
              },
              {
                id: '1.2',
                text: 'Chemicals',
              },
              {
                id: '1.3',
                text: 'Packaged Liquids',
              },
              {
                id: '1.4',
                text: 'Construction',
              },
              {
                id: '1.5',
                text: 'Laminated Wood',
              },
              {
                id: '1.6',
                text: 'And others',
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
            bg: 'bg_card',
            links: [
              {
                id: '1.1',
                text: 'Responsability',
              },
              {
                id: '1.2',
                text: 'Term of Use',
              },
              {
                id: '1.3',
                text: 'About Cookies',
              },
              {
                id: '1.4',
                text: 'Privacy Policy',
              },
              {
                id: '1.5',
                text: 'Accessibility',
              },
              {
                id: '1.6',
                text: 'Information',
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

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/utility.scss';
  footer {
    color: $color--text1;
    max-width: 1980px;
    margin: auto;
    .top_footer {
      padding-top: $height--header;
      padding-bottom: $height--header;
    }
    .bot_footer {
      padding: 2rem;
      background-color: $bg--darker;
      p {
        margin: 0;
        color: $color--text1;
      }
    }
  }

</style>
