<template>
  <v-app-bar app elevation="4" color="white" class="app-bar">
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mobile"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-app-bar-title>
      <v-img
        alt="Chimex Logo"
        contain
        src=""
        transition="scale-transition"
        :max-width="$vuetify.breakpoint.mobile ? '100' : '150'"
    /></v-app-bar-title>

    <v-spacer></v-spacer>
    <v-row v-if="!$vuetify.breakpoint.mobile" justify="center">
      <NuxtLink class="pa-6" to="/">Home</NuxtLink>
      <NuxtLink class="pa-6" to="/procedures">Procedures</NuxtLink>
      <NuxtLink class="pa-6" to="/technology">Technology</NuxtLink>
      <NuxtLink class="pa-6" to="/our-office">Our Office</NuxtLink>
      <NuxtLink class="pa-6" to="/location">Location</NuxtLink>
    </v-row>
    <v-spacer></v-spacer>

    <v-dialog
      v-model="dialog"
      v-bind:class="[$vuetify.breakpoint.mobile ? 'abs-dialog' : '']"
      :hide-overlay="$vuetify.breakpoint.mobile"
      :fullscreen="$vuetify.breakpoint.mobile"
      transition="dialog-top-transition"
      :max-width="
        $vuetify.breakpoint.mobile ? $vuetify.breakpoint.mobile.width : '600px'
      "
    >
      <template v-slot:activator="{ attrs }">
        <v-btn
          class="pa-2"
          color="primary"
          elevation="2"
          v-bind="attrs"
          @click="dialog = true"
        >
          Request a Quote
        </v-btn>
      </template>

      <quote-form @close-dialog="closeDialog()"></quote-form>
    </v-dialog>
  </v-app-bar>
</template>
          

<script>
export default {
  name: 'Navbar',
  data: () => ({
    drawer: null,
    dialog: false,
    items: [
      { title: 'Home' },
      { title: 'Procedures' },
      { title: 'Technology' },
      { title: 'Our Office' },
      { title: 'Location' },
    ],
  }),
  methods: {
    closeDialog() {
      this.dialog = false
    },
  },
}
</script>

