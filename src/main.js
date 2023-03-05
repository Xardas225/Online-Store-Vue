import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
.use(vuetify)
.use(store)
.use(router)
    .mount('#app')

