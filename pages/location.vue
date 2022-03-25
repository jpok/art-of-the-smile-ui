<template>
  <v-container fluid>
    <div
      class="text-h6 text-sm-h4 text-lg-h3 text-center ma-8 primary--text font-weight-light"
    >
      We are conveniently located in the heart of Buckhead
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.776892430754!2d-84.43112398255614!3d33.843863899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50550b18cb10b%3A0x19a11f67aa4fa07c!2sDr.%20Brock%20F.%20Tekin%2C%20DMD!5e0!3m2!1sen!2sus!4v1647389365362!5m2!1sen!2sus"
      width="100%"
      height="450"
      style="border: 0; z-index: -1"
      allowfullscreen=""
      loading="lazy"
    ></iframe>

    <v-row class="my-12">
      <v-col>
        <v-card>
          <v-card-title primary-title class="primary--text">
            Hours & Directions
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <ul style="list-style: none">
                  <li><span class="font-weight-bold">Monday</span> 8:30-4:00pm</li>
                  <li><span class="font-weight-bold"> Tuesday</span> 8:30-4:00pm</li>
                  <li><span class="font-weight-bold"> Wednesday </span>7:30-3:30pm</li>
                  <li><span class="font-weight-bold"> Thursday </span> 8:30-4:00pm</li>
                  <li><span class="font-weight-bold">  Friday </span>7:30-2:00pm </li>
                </ul>
              </v-col>

              <v-col cols="12" sm="6">
                <ul style="list-style: none">
                  <li class="mb-2">
                    - <span class="font-weight-bold"> Off I-75 </span>: Take exit #255: West Paces/Northside - it’s
                    closest <span class="font-weight-bold">to Northside Parkway (US-41): </span> turn west on Howell Mill
                    Road. We are in the first building on the right: 
                    <a class="primary--text" href="https://www.google.com/maps?ll=33.843864,-84.428935&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=1846791852298051708">
                    3280 Howell
                    Mill Road, the Northwest Medical Center.
                    </a> (Do <span class="font-weight-bold">not</span> take #252 Howell Mill exit - you’ll be 7
                    miles away!)
                  </li>                  
                  <li class="mb-2">
                    -<span class="font-weight-bold"> Parking: </span> Come early, the parking lot can be full. If you
                    enter the building from the street level, use the East
                    Entrance. We are on the 1st floor, Suite 112
                  </li>
                </ul>
                <p class="text-subtitle-2 font-weight-light"></p
              ></v-col>
            </v-row>
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