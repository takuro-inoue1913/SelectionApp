# 今回の課題で使用した技術
* React Typescript v17
* Redux Toolkit RTK Query

# 本番環境
* Firebase (Hosting)

### URL
https://populationtransitiongraph.web.app

https://user-images.githubusercontent.com/54260834/155903830-c1fc2d5f-39d2-4601-a26f-2fb0c586ddfe.mov

# How Use
### インストール
```bash
yarn
```

### 起動
```bash
yarn start
```

### テスト
// ローカルサーバーを立ち上げた状態で
```bash
yarn cy:run
```

### linter
```bash
yarn lint:fix
```

### prettier
```bash
yarn fmt
```

# テストケース
1. 最初の画面にアクセスした際に都道府県一覧を取得し、数分チェックボックスが表示されているか
2. 各都道府県のチェックボックスをクリックすると下記のグラフ図に都道府県の名前のついた凡例とグラフ線が表示されるか
3. チェックボックスをオフにすると該当の都道府県の凡例とグラフ線がグラフ図から削除されるか
4. 複数のチェックボックスをクリックすると数分のグラフ線、凡例が表示されるか

# こだわったポイント
RESAS APIで取得したデータをStoreで状態管理し、無駄なリクエストを抑えた。  
都道府県を選択したときにグラフ線の色を固定にしたくなかったのでランダムで色を作るプログラムを作った。  
また、今後新機能が入ることを想定して汎用性のあるコード設計にした。  

# PR
### 課題
Redux Toolkit RTK Queryを使うのが今回初めてで独自の仕様を理解するのが大変だった。  
### 解決
一度サンプルのコードを持ってきてライブラリの仕様を確認し、少しずつ今回の要件に当てはめて行って実装した

### 課題
グラフ描画の際に渡すデータ構造が特殊で分からなかった
### 解決
まずはサンプルの配列を作り、予定通りの描画ができるまで試行錯誤し、その後そのデータを実現させるようにREST APIから取得したデータを加工して表示できた
