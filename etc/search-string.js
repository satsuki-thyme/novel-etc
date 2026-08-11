// 検索の文字列

let regexp = new regexp(``)
let glob = new glob(``)

/*

  ## 除外
  -------

*/

glob = `./story-world, ./novel-etc, thinking-notes, settings/history, archive`



/*

  ## チャプターの物語構造体
  -------------------------

*/

// ### サマリー、インプレッション

regexp = /(?=impression|\n?- episode:|summary:|impression:|location:)/gm


// ### 試練

regexp = /(?=chO|\n?- episode:|summary:|impression:|location:)/gm


// ### 情報提示

regexp = /(?=inf|\n?- episode:|summary:|impression:|location:)/gm


// ### キー要素

regexp = /(?=key|chO|l\d[ORC]|drv|bgr|inf|\n?- episode:|summary:|impression:|location:)/gm


// ### 統合系列の物語構造体

regexp = /(?=integ (gDs|lDs|od[ORC]|key|drv|inf)|(alice|leona|myria) (chO|bgr|l\dA)|\n?- episode:|summary:|impression:|location:)/gm


// ### サブの物語構造体

regexp = /(?=l\d[ORC]|\n?- episode:|summary:|impression:|location:)/gm



/*

## エピソードの物語構造体
-------------------------

*/

// ### シーン・クライマックス設定

regexp = /(?=\n?[ \t]*- scene:|gist|climax)/gm


// ### ビート設定

regexp = /(?=\n?[ \t]*- scene:|gist|climax|elements|- beat group:|- beat:)/gm


// ### 本文執筆ガイド向け削除と置換

replace(/^ *- \n?[ \t]*- scene:[\s\S\n]*?(?=- beat:)|(?<=- beat:)[\s\S\n]*?beat performance:(\n(?! *- (?!beat (re|pre-|post-)?action)))*|^\n? *- beat (re|pre-|post-)?action:(\n(?! *- ))*|^(?<=\n\n)\n+|^ +/gm, ``)

replace(/^(?=beat)|(?<=beat.*)$/gm, `- `)
