# 検索の文字列


## 除外
-------

``` glob
settings.json, ./story-world, ./novel-etc, thinking-notes, settings/history, archive
```

## チャプターの物語構造体
-------------------------

### サマリー、インプレッション

検索:
``` regex
(?=impression|\n.*- episode:|summary:)
```

### 試練

検索:
``` regex
(?=odA|\n.*- episode:)
```

### 情報提示

検索:
``` regex
(?=inf|\n.*- episode:)
```

### キー要素

検索:
``` regex
(?=key|odA|l\d[ARC]|bgr|inf|\n.*- episode:|summary:)
```

### 統合系列の物語構造体

検索:
``` regex
(?=integ (gDs|lDs|od[ARC]|key|drv|inf)|(alice|leona|myria) (odA|bgr|l\dA)|\n.*- episode:|summary:|location)
```

### サブの物語構造体

検索:
``` regex
(?=l\d[ARC]|\n.*- episode:|summary:)
```

## エピソードの物語構造体
-------------------------

### シーン・クライマックス設定

検索:
``` regex
(?=- scene:|gist|climax)
```

### ビート設定

検索:
``` regex
(?=- scene:|gist|climax|elements|- beat group:|- beat:)
```

### 本文執筆ガイド向け削除と置換

削除
``` regex
^ *- - scene:[\s\S\n]*?(?=- beat:)|(?<=- beat:)[\s\S\n]*?beat performance:(\n(?! *- (?!beat (re|pre-|post-)?action)))*|^\n? *- beat (re|pre-|post-)?action:(\n(?! *- ))*|^(?<=\n\n)\n+|^ +
```

置換
``` regex
^(?=- )|^(?=beat)|(?<=- .*)$|(?<=beat.*)$
```

置換文字列
`-----`
