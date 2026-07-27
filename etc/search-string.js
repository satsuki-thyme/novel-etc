// 検索の文字列

let target = ""

/*

  ## 除外
  -------

*/

target.glob(`settings.json, ./story-world, ./novel-etc, thinking-notes, settings/history, archive`)



/*

  ## チャプターの物語構造体
  -------------------------

*/

// ### サマリー、インプレッション

target.search(/(?=impression|^- episode:|\n- episode:|summary:)/)


// ### 試練

target.search(/(?=odA|\n- episode:)/)


// ### 情報提示

target.search(/(?=inf|\n- episode:)/)


// ### キー要素

target.search(/(?=key|odA|l\d[ARC]|bgr|inf|^- episode:|\n- episode:|summary:)/)


// ### 統合系列の物語構造体

target.search(/(?=integ (gDs|lDs|od[ARC]|key|drv|inf)|(alice|leona|myria) (odA|bgr|l\dA)|^- episode:|\n- episode:|summary:|location)/)


// ### サブの物語構造体

target.search(/(?=l\d[ARC]|^- episode:|\n- episode:|summary:)/)



/*

## エピソードの物語構造体
-------------------------

*/

// ### シーン・クライマックス設定

target.search(/(?=- scene:|gist|climax)/)


// ### ビート設定

target.search(/(?=- scene:|gist|climax|elements|- beat group:|- beat:)/)


// ### 本文執筆ガイド向け削除と置換

target.search(/^ *- - scene:[\s\S\n]*?(?=- beat:)|(?<=- beat:)[\s\S\n]*?beat performance:(\n(?! *- (?!beat (re|pre-|post-)?action)))*|^\n? *- beat (re|pre-|post-)?action:(\n(?! *- ))*|^(?<=\n\n)\n+|^ +/)

target.replace(/^(?=beat)|(?<=beat.*)$/, `- `)
