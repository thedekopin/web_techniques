<template>
  <div id="about_contents">
    <br>
    <h1>About</h1>
    <br>
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
        { Key: "Name", Value: "西村　一輝" },
        { Key: "Age", Value: 23 },
        { Key: "University", Value: "大阪工業大学大学院情報科学研究科" },
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
