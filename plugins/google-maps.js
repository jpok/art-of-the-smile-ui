import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD8a762-FYQLRUEE9_YbDUErroZnNvRIME',
    libraries: 'places',
  },
})
