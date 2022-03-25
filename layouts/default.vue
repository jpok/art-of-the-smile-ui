<template>
  <v-app>
    <Navbar />
    <v-main style="margin-top: 50px">
      <Nuxt />
    </v-main>

    <v-footer inset width="auto" color="primary" class="py-2 white--text" app>
      <v-container fluid>
        <v-row justify="center">                    
          <v-spacer></v-spacer>
          <v-col align="center" class="pa-0" cols="8" sm="6" >
            <a
              href="https://g.page/BrockTekinDDS?share"
              ><v-icon class="mx-2">mdi-google</v-icon></a
            >
            <a href="https://www.youtube.com/user/DrBrockTekin"><v-icon class="mx-2">mdi-youtube</v-icon></a>
            <a href="https://www.facebook.com/ArtoftheSmile/"><v-icon class="mx-2">mdi-facebook</v-icon></a>
            <a href="https://www.instagram.com/art_of_the_smile/?hl=en"
              ><v-icon class="mx-2">mdi-instagram</v-icon></a
            >
            <a href="https://www.yelp.com/biz/art-of-the-smile-atlanta">
              <svg
                class="mb-n1"
                width="30"
                height="20.882"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"
                />
              </svg>
            </a>
          </v-col>
          
          <v-col cols="4" sm="3" align="end" class="pa-0">
            (404) 355-5332
            <!-- <p>3280 Howell Mill Rd NW. Ste 112 Atlanta, GA 30327. West Paces Ferry / Northside, Buckhead</p> -->
          </v-col>
        </v-row>
      </v-container>
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
 input[type="time"]::-webkit-calendar-picker-indicator {
  background: none;
  display: none;
 }

.carousel-3d-slide {
  background-color: transparent !important;
}

.carousel-3d-container figure {
  margin: 0;
}

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

@keyframes right_to_left {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0;
  }
}

@keyframes left_to_right {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 2px;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

  .v-text-field input {
    font-size: .8em;
  }

.v-label {
    font-size: .8em;
}
.slide-in-left {    
  animation: left_to_right 3s ease;  
}

.slide-in-right {
  animation: right_to_left 3s ease;  
}


</style>
