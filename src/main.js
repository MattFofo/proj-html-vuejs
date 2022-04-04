import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faGem } from '@fortawesome/free-regular-svg-icons';
import {
  faTruckRampBox, faArrowRight, faQuoteRight, faTemperatureLow, faBoxesStacked, faLocationDot,
  faClock, faPhone, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';

// eslint-disable-next-line max-len
library.add(faTruckRampBox, faArrowRight, faQuoteRight, faTemperatureLow, faBoxesStacked, faUser, faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faGem, faLocationDot);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
