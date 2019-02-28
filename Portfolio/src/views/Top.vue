<template>
  <div class="top">
    <br>
    <h1>
       Welcome to My Portfolio
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
