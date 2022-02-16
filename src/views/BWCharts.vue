<template>
  <section v-if="marketPriceList" class="statistics-page main-layout flex column">
    <header class="stats-header flex">
      <div class="div-header">
      <h1>Bitcoin statistics</h1>
      </div>
      <div class="div-header">
      <img class="chart-svg" src="../assets/imgs/icon/chart-icon.png" alt="" />
      </div>
    </header>
    <main class="stats-main">
      <Chart :chartdata="marketPriceList" />
    </main>
  </section>
  <section v-else class="loading">Loading Data....</section>
</template>

<script>
import Chart from "../components/Chart.vue";
import bitcoinService from "../services/bitcoin.Service";
export default {
  data() {
    return {
      marketPriceList: null,
    };
  },
  async created() {
    this.marketPriceList = await bitcoinService.getMarketPrice();
  },
  components: {
    Chart,
  },
};
</script>