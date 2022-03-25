<template>
  <v-container fluid>
    <v-navigation-drawer v-model="drawer" v-if="$vuetify.breakpoint.xs" app>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group active-class="gray">
          <v-list-item>
            <NuxtLink class="pa-6" to="/">Home</NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink class="pa-6" to="/procedures">Procedures</NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink class="pa-6" to="/technology">Technology</NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink class="pa-6" to="/our-office">Our Office</NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink class="pa-6" to="/our-location">Location</NuxtLink>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevation="4" color="white" class="app-bar">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img
        eager
        :style="{
          'margin-top': $vuetify.breakpoint.xs ? '20px' : '55px',
        }"
        alt="Art of The Smile Logo"
        src="logo.png"
        transition="scale-transition"
        :max-width="$vuetify.breakpoint.xs ? '80' : '130'"
      />

      <v-spacer></v-spacer>
      <v-row v-if="!$vuetify.breakpoint.xs" justify="center">
        <NuxtLink class="pa-6" to="/">Home</NuxtLink>
        <NuxtLink class="pa-6" to="/procedures">Procedures</NuxtLink>
        <NuxtLink class="pa-6" to="/technology">Technology</NuxtLink>
        <NuxtLink class="pa-6" to="/our-office">Our Office</NuxtLink>
        <NuxtLink class="pa-6" to="/our-location">Location</NuxtLink>
      </v-row>
      <v-spacer></v-spacer>

      <v-dialog
        v-model="dialog"
        :fullscreen="$vuetify.breakpoint.xs"
        :hide-overlay="$vuetify.breakpoint.xs"
        :scrollable="$vuetify.breakpoint.xs"
        transition="dialog-top-transition"        
        :width="$vuetify.breakpoint.xs ? $vuetify.breakpoint.xs.width : '80%'"
      >
        <template v-slot:activator="{ attrs }">
          <v-btn
            class="pa-2"
            color="primary"
            elevation="2"
            v-bind="attrs"
            @click="dialog = true"
          >
            Book Online
          </v-btn>
        </template>

        <BookForm @close-dialog="closeDialog()" />
      </v-dialog>
    </v-app-bar>
  </v-container>
</template>
          

<script>
export default {
  name: 'AppNavbar',
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

