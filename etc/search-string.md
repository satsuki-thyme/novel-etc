# 検索の文字列


## 除外
-------

``` glob
settings.json, ./story-world, ./novel-etc, thinking-notes, settings/history, archive
```

## チャプターの物語構造体
-------------------------

### 概略

検索:
``` regex
(?=🟦|summary|impression)
```

### 試練

検索:
``` regex
(?=odA|🟦)
```

### 情報提示

検索:
``` regex
(?=inf|🟦)
```

### キー要素

検索:
``` regex
(?=odA|key|li1|li2|bGr|inf|🟦|summary)
```

### 統合の物語構造体

検索:
``` regex
(?=(alice|leona|myria) (odA|bGr|li\d)|integ (gDs|lDs|odA|odR|ke|inf|env locat)|🟦|summary)
```

### サブの物語構造体

検索:
``` regex
(?=li\d|🟦|summary)
```

## エピソードの物語構造体
-------------------------

### シーン・クライマックス設定

検索:
``` regex
(?=🟥|gist|climax)
```

### ビート設定

検索:
``` regex
(?=🟥|gist|climax|elements|🟧|🟨)
```

### 本文執筆ガイド向け削除と置換

削除
``` regex
^ *- 🟥[\s\S\n]*?(?=- 🟨)|(?<=🟨)[\s\S\n]*?beat performance:(\n(?! *- (?!beat (re|pre-|post-)?action)))*|^\n? *- beat (re|pre-|post-)?action:(\n(?! *- ))*|^(?<=\n\n)\n+|^ +
```

置換
``` regex
^(?=- )|^(?=beat)|(?<=- .*)$|(?<=beat.*)$
```

置換文字列
`-----`
