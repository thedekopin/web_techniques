<template>
  <div id="about_contents">
    <br>
    <h1 class="about-page">About</h1>
    <b-col cols="2"/>
    <b-table class="w-50" fixed :fields="fields" :items="items"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "Key",
          thStyle: { color: "white", background: "#17a2b8" }
        },
        {
          key: "Value",
          thStyle: { color: "white", background: "#17a2b8" }
        }
      ],
      items: [
        { Key: "Name", Value: "西村　一輝" },
        { Key: "Age", Value: 23 },
        { Key: "Universary", Value: "大阪工業大学大学院情報科学研究科" },
        { Key: "Github", Value: "thedekopin" },
        { Key: "AtCoder", Value: "kazukazu" }
      ],
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 175,
        height: 175,
        class: "m1"
      }
    };
  }
};
</script>

<style lang="scss">
h1.about-page{
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.foto{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
}
table {
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
