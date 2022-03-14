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
      <v-col cols="10">
        <ProcedureTabs />
      </v-col>
    </v-row>

    <p
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
      "
      class="primary--text text-overline"
    >
      The health and appearance of your smile should be perfectly in balance,
      and our careful attention to detail reflects this principle
    </p>
  </v-container>
</template>

<script>
export default {
  name: 'ProceduresPage',
}
</script>

<style scoped>
.balance {
  position: fixed;
  bottom: 20;
}
</style>
