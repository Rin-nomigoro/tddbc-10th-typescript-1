```
問題文
【仕様】
- 目的
いちごを出荷する
品種とサイズを知る

- 仕様
品種とサイズを与える
いちごを作成する
その文字列表現を取得する

- 詳細
文字列表現の例:
あまおう: S とちおとめ: M もういっこ: L

なお、品種は、
あまおう
とちおとめ
もういっこ
の3種類、
いちごのサイズは
S
M
L
LL
の4種類です。
```

TODO
---
v0.1
---
- 品種を入れて、品種を返すこと
  - 「あまおう」を「あまおう」を返すこと

- 品種とサイズを入力して、そのまま文字列として取得できること。
  - 品種:あまおう、サイズ:Sを入力し、文字列表現「あまおうS」を取得できること

- 品種とサイズを入力して、いちごの文字列を取得できること。(仕様・振る舞い)
  - 品種:あまおう、サイズ:Sを入力し、文字列表現「あまおう: S」を取得できること(ふるまいの詳細)
  - 品種:とちおとめ、サイズ:Mを入力し、文字列表現「とちおとめ: M」を取得できること
  - 品種:もういっこ、サイズ:Lを入力し、文字列表現「とちおとめ: M」を取得できること
  - 品種:もういっこ、サイズ:LLを入力し、文字列表現「もういっこ: LL」を取得できること
---

v0.2
---
- [x] 1. 品種を入力して、Strawberrオブジェクトを取得できること。
- [x] 2. 品種とサイズを入力して、Strawberrオブジェクトを取得できること。 -> Strawberrオブジェクトを取得できるだけでいいのか？
  - [x] 入力した品種の文字列とStrawberrオブジェクトの品種の文字列が一致すること
  - [x] 入力したサイズの文字列とStrawberrオブジェクトのサイズの文字列が一致すること
- [x] 3. いちごオブジェクトの文字列表現を受け取る。
  - [x] 品種:あまおう、サイズ:Sを入力し、文字列表現「あまおう: S」を取得できること(ふるまいの詳細)
  - [x] 品種:とちおとめ、サイズ:Mを入力し、文字列表現「とちおとめ: M」を取得できること。
  - [x] 品種:もういっこ、サイズ:Lを入力し、文字列表現「もういっこ: L」を取得できること。
  - [x] 品種:もういっこ、サイズ:LLを入力し、文字列表現「もういっこ: LL」を取得できること。
