<template>
  <v-card flat>
    <v-row justify="center">
      <v-icon>{{icon}}</v-icon>
    </v-row>
    <v-card-title primary-title>
      {{ title }}
    </v-card-title>
    <v-card-text> {{ text }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TechnologyCard',
  props: {
    icon: String,
    title: String,
    text: String,
  },
}
</script>

<style>
</style>