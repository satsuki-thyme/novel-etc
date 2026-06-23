~~~~# 検索の文字列


## 除外
-------

``` glob
settings.json, ./story-world, ./plot-creation-method, ./configuration-setting-method, ./research-on-novel-creating, ./workspace, ./novel-etc, thinking-notes, settings/history, archive
```

## チャプタープロット
---------------------

### 概略

検索:
``` regex
(?=episode: \d+|summary)
```

### 試練

検索:
``` regex
(?=odA|episode: \d+)
```

### 情報提示

検索:
``` regex
(?=inf|episode: \d+)
```

### キー要素

検索:
``` regex
(?=odA|key|li1|li2|bGr|inf|episode: \d+|summary)
```

### 統合プロット

検索:
``` regex
(?=(alice|leona|myria) (odA|bGr|li\d)|integ (gDs|lDs|odA|odR|ke|inf|env locat)|episode: \d+|summary)
```

### サブプロット

検索:
``` regex
(?=li\d|episode: \d+|summary)
```

## エピソードプロット
---------------------

### シーン要素

検索:
``` regex
(?=- scene:|sn-descriptor|gis-item|int-item)
```

### ビート要素

検索:
``` regex
(?=- scene:|sn-descriptor|- beat:|- narration:|bt-descriptor|nr-descriptor)
```

### 本文執筆ガイド向け削除と置換

削除
``` regex
^ *- 🟥 scene:[\s\S\n]*?(?=- 🟨 beat:|- 🟨 narration:)|(?<=- 🟨 beat:|- 🟨 narration:)[\s\S\n]*?beat performance:(\n(?! *- (?!beat (re|pre-|post-)?action)))*|^\n? *- beat (re|pre-|post-)?action:(\n(?! *- ))*|^(?<=\n\n)\n+|^ +
```

置換
``` regex
^(?=- )|^(?=beat)|(?<=- .*)$|(?<=beat.*)$
```

置換文字列
`-----`
