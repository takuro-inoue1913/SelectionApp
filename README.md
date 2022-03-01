# Using Technology
* React Typescript v17
* Redux Toolkit RTK Query

# Production
* Firebase (Hosting)

### URL
https://populationtransitiongraph.web.app

https://user-images.githubusercontent.com/54260834/155903830-c1fc2d5f-39d2-4601-a26f-2fb0c586ddfe.mov

# How Use
### インストール
```bash
yarn
```

### Start
```bash
yarn start
```

### Test
// ローカルサーバーを立ち上げた状態で
```bash
yarn cy:run
```

### Linter
```bash
yarn lint:fix
```

### Prettier
```bash
yarn fmt
```

# Test Case
1. 最初の画面にアクセスした際に都道府県一覧を取得し、数分チェックボックスが表示されているか
2. 各都道府県のチェックボックスをクリックすると下記のグラフ図に都道府県の名前のついた凡例とグラフ線が表示されるか
3. チェックボックスをオフにすると該当の都道府県の凡例とグラフ線がグラフ図から削除されるか
4. 複数のチェックボックスをクリックすると数分のグラフ線、凡例が表示されるか

# Test Tool
Cypressを採用しE2Eテストを導入

# Obsessed Points
RESAS APIで取得したデータをStoreで状態管理し、無駄なリクエストを抑えた。  
都道府県を選択したときにグラフ線の色を固定にしたくなかったのでランダムで色を作るプログラムを作った。  
また、今後新機能が入ることを想定して汎用性のあるコード設計にした。  

# PR
Redux Toolkit RTK Queryを使うのが今回初めてで独自の仕様を理解するのが大変だった。  
　↓
一度サンプルのコードを持ってきてライブラリの仕様を確認し、少しずつ今回の要件に当てはめて行って実装した

グラフ描画の際に渡すデータ構造が特殊で分からなかった
　　↓
まずはサンプルの配列を作り、予定通りの描画ができるまで試行錯誤し、その後そのデータを実現させるようにREST APIから取得したデータを加工して表示できた
