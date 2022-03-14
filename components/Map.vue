<template>
  <div>
     <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
      >

        <GmapMarker                
        :position='center'        
      />

     </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      center: { lat: 33.84365414765804, lng: -84.4289629424709 },
    }
  }, 
  mounted() {
    this.geolocate();
  },
  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
}
</script>