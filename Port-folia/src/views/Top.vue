<template>
  <div class="top">
    <br>
    <h1 class="top-page">
      Welcome to My Port-folia
    </h1> 
    <TopContents></TopContents>
  </div>
</template>

<script>
// @ is an alias to /src
import TopContents from "@/components/TopContents.vue";

export default {
  name: "top",
  components: {
    TopContents
  }
};
</script>

<style>
h1.top-page{
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>