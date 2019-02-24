<template>
  <div id="about_contents">
    <br>
    <h1 class="about-page">About</h1>
    <div class="foto">
      <b-img v-bind="mainProps" rounded="circle" alt="Circle image"/>
    </div>

    <br>
    <b-col cols="2"/>
    <b-table fixed :fields="fields" :items="items"/>
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
        { Key: "Name", Value: "ニシムラ　カズキ" },
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
  top: 20%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.foto{
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
}
table {
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
