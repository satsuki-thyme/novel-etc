# 検索の文字列


## 除外
-------

``` glob
settings.json, ./story-world, ./plot-creation-method, ./configuration-setting-method, ./research-on-novel-creating, ./workspace, ./novel-etc, thinking-notes, settings/history, archive
```

## チャプタープロット
---------------------

### 概略

全文検索: (?=episode: \d+|summary)

### 試練

全文検索: (?=odA|episode: \d+)

### 情報提示

全文検索: (?=inf|episode: \d+)

### キー要素

全文検索: (?=odA|key|li1|li2|bGr|inf|episode: \d+|summary)

### 統合プロット

全文検索: (?=(alice|leona|myria) (odA|bGr|li\d)|integ (gDs|lDs|odA|odR|ke|inf|env locat)|episode: \d+|summary)

### サブプロット

全文検索: (?=li\d|episode: \d+|summary)

## エピソードプロット
---------------------

### シーン要素

全文検索: (?=- scene:|sn-descriptor|gis-item|int-item)

### ビート要素

全文検索: (?=- scene:|sn-descriptor|- beat:|- narration:|bt-descriptor|nr-descriptor)

### 本文ガイド向け削除

``` regexp 全文検索
^ *- scene:[\s\S]*?(?=- beat group:)|((?<= *- beat group:.*\n)| *- beat:| *- narration:)[\s\S]*?beat performance:\n|^(?=.*:) *(- )?|^ *| *(?=- beat group:)
```
