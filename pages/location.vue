<template>
  <v-container fluid>
    <div class="text-h6 text-sm-h4 text-lg-h3 text-center ma-8 primary--text">We are conveniently located in the heart of Buckhead</div>
    <Map />
    
    <v-row class="my-12">
      <v-col>
        <v-card>
          <v-card-title primary-title class="primary--text"> Hours </v-card-title>
          <v-card-text>
            <ul style="list-style: none">
              <li>Monday 8:30-4:00pm</li>
              <li>Tuesday 8:30-4:00pm</li>
              <li>Wednesday 7:30-3:30pm</li>
              <li>Thursday 8:30-4:00pm</li>
              <li>Friday 7:30-2:00pm</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>