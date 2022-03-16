<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div
          class="text-h6 text-sm-h4 text-lg-h3 text-center primary--text font-weight-light"
        >
          At Art of the Smile, we truly believe that every dental treatment
          should be carried out with equal attention given to form and function
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <ProcedureTabs />
      </v-col>
    </v-row>

    <div      
      class="primary--text text-center text-overline px-4"
    >
      The health and appearance of your smile should be perfectly in balance,
      and our careful attention to detail reflects this principle
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ProceduresPage',
}
</script>

