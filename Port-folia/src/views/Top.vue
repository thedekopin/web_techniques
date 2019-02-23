<template>
  <div class="top">
    <br>
    <HelloWorld msg="Welcome to Port-folia"/>
    <TopContents></TopContents>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TopContents from "@/components/TopContents.vue";

export default {
  name: "top",
  components: {
    HelloWorld,
    TopContents
  }
};
</script>
