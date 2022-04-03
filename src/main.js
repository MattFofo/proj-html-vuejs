import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {
  faTruckRampBox, faArrowRight, faQuoteRight, faTemperatureLow, faBoxesStacked,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';

library.add(farStar, faTruckRampBox, faArrowRight, faQuoteRight, faTemperatureLow, faBoxesStacked);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
