<template>
  <div id="research_contents">
    <br>
    <h1 class="about-page">Research</h1>
    <br>
    <div class="content">
      <h4>研究概要</h4>
      <p>
        <h5>
          クラウドコンピューティングや IoT などの発展により，サーバ管理技術が重要視されている．
        そのため，大学などの教育機関において AWS などの仮想サーバ環境を用いたサーバ管理演習が行われている．
        サーバ管理演習とは，サーバを構築管理するための技術やノウハウを学べる実習型の演習である．
        そこで，学生の進捗状況把握や課題の誤りを特定する事を目的として，
        サーバ管理演習におけるログを3種類の履歴としてコマンド実行履歴，ファイル編集履歴，サーバ状況確認履歴を記録する
        ログ収集環境とそれらのログを可視化するための可視化環境としてWebシステムの提案と検討を行なっている．
        </h5>
      </p>
      <!-- <h4>Webフロントの実装</h4>
      <p>
        <h5>
          このシステムの可視化環境は，主にjQueryを用いて実装されており，
        </h5>
      </p> -->
      <div class="mt-5">
        <b-card-group deck>
          <b-card
            title="アーキテクチャ"
            img-src="../assets/research1.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 100%;"
            class="mb-2"
            border-variant="info"
          ></b-card>

          <b-card
            title="サーバ状況履歴確認画面"
            img-src="../assets/research2.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 100%;"
            class="mb-2"
            border-variant="info"
          ></b-card>
        </b-card-group>
      </div>
      <div class="mt-4">
        <b-card-group deck>
          <b-card
            title="コマンド実行履歴確認画面"
            img-src="../assets/research3.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 100%;"
            class="mb-2"
            border-variant="info"
          ></b-card>

          <b-card
            title="ファイル編集履歴確認画面"
            img-src="../assets/research4.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 100%;"
            class="mb-2"
            border-variant="info"
          ></b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>
