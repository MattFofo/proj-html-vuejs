import Vue from 'vue';
// eslint-disable-next-line import/no-relative-packages
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/no-relative-packages
import { faFacebookF, faTwitter, faLinkedinIn } from '../node_modules/@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line import/no-relative-packages
import { faUser, faGem } from '../node_modules/@fortawesome/free-regular-svg-icons';
import {
  faTruckRampBox, faArrowRight, faQuoteRight, faTemperatureLow, faBoxesStacked, faLocationDot,
  faClock, faPhone, faEnvelope, faChevronRight, faArrowUp,
  // eslint-disable-next-line import/no-relative-packages
} from '../node_modules/@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/no-relative-packages
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome';

import App from './App.vue';

// eslint-disable-next-line max-len
library.add(faTruckRampBox, faArrowRight, faQuoteRight, faTemperatureLow, faBoxesStacked, faUser, faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faGem, faLocationDot, faChevronRight, faArrowUp);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
