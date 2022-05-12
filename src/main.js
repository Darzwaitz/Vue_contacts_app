import { createApp } from 'vue';

import router from './router.js';
import store from './store/index';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const app = createApp(App);

app.use(router).use(store);

app
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-badge', BaseBadge)
  .component('base-spinner', BaseSpinner);

app.mount('#app');
