<template>
  <v-card flat>    
    <div style="display:block; height:70px" class="pl-4" >      
      <v-img max-width="50" :src="icon" />            
    </div>
    <div class="primary--text pl-4">    
      {{ title }}    
    </div>
    <v-card-text class="secondary--text"> {{ text }} </v-card-text>
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