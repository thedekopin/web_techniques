<template>
  <div id="languages_contents">
    <br>
    <h1>Languages</h1>
    <div class="mt-5">
      <b-card-group deck>
        <b-card
          title="C/C++"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 22rem;"
          class="mb-2"
        >
          <b-card-text>自己紹介ページ</b-card-text>

          <b-button to="/about" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card
          title="Java"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 22rem;"
          class="mb-2"
        >
          <b-card-text>開発経験のあるプログラミング言語</b-card-text></b-card-text>

          <b-button to="/languages" variant="primary">Go somewhere</b-button>
        </b-card>
        <b-card
          title="Ruby"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 22rem;"
          class="mb-2"
        >
          <b-card-text>利用経験のある開発支援ツール</b-card-text>

          <b-button to="/tools" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-card-group>
    </div>

    <div class="mt-3">
      <b-card-group deck>
        <b-col cols="2"/>
        <b-card
          title="Python"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 22rem;"
          class="mb-2"
        >
          <b-card-text>大学院で行なっている研究内容</b-card-text>

          <b-button to="/research" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card
          title="HTML/CSS/JavaScript"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 22rem;"
          class="mb-2"
        >
          <b-card-text>連絡先やSNSアカウント</b-card-text>

          <b-button to="/contacts" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
