<template>
  <div id="app">
    <Header></Header>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
// #app {
//   font-weight: 600;
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   // text-align: center;
// }
</style>
