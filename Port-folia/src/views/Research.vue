<template>
  <div id="research_contents">
    <br>
    <h1 class="about-page">Research</h1>
    <div class="content">
      <h3>研究概要</h3>
      <h5>
        <p>
          クラウドコンピューティングや IoT などの発展により，サーバ管理技術が重要視されている．
          そのため，大学などの教育機関において AWS などの仮想サーバ環境を用いたサーバ管理演習が行われている．
          サーバ管理演習とは，サーバを構築管理するための技術やノウハウを学べる実習型の演習である．
          そこで，学生の進捗状況把握や課題の誤りを特定する事を目的として，
          サーバ管理演習におけるログを3種類の履歴として記録するログ収集環境と可視化環境としてWebシステムの提案と検討を行なっている．
          この可視化環境の実装には，サーバサイドをPythonとFlaskを用いて実装し，WebフロントをjQueryとbootstrapを用いて実装を行なっている．
          また，Data Tablesというテーブル用のライブラリを利用して，
        </p>

        <!-- <a href="">詳細はこちら</a>  -->
        <!-- サーバ管理演習のためのユーザー行動履歴収集システムの検討 
      https://www.ieice.org/ken/paper/20180119n1bv/

      進捗状況の把握と振り返り支援を目的としたサーバ管理演習のためのユーザ行動履歴収集システムの検討
        https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_detail&page_id=13&block_id=8&item_id=191090&item_no=1-->
      </h5>
      <div class="mt-5">
        <b-card-group deck>
          <b-card
            img-src="../assets/research1.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50%;"
            class="mb-2"
            border-variant="info"
          ></b-card>

          <b-card
            img-src="../assets/research2.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50%;"
            class="mb-2"
            border-variant="info"
          ></b-card>
        </b-card-group>
      </div>
      <div class="mt-4">
        <b-card-group deck>
          <b-card
            img-src="../assets/research3.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50%;"
            class="mb-2"
            border-variant="info"
          ></b-card>

          <b-card
            img-src="../assets/research4.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50%;"
            class="mb-2"
            border-variant="info"
          ></b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<style>
/* h4 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
.content{
  margin-top: 10%;
}
</style>

