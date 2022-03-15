<template>
  <v-app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>

    <v-footer :absolute="!fixed" color="primary" class="white--text" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style>
.v-btn {
  border-radius: 28px !important;
}

.v-dialog {
  overflow: hidden;
}

.v-application {
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: grey !important;
}
a.nuxt-link-exact-active {
  font-weight: bold;
  color: var(--v-primary-base) !important;
}
/* exact link will show the primary color for only the exact matching link */

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}
</style>
