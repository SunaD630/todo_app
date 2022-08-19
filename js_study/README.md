# TODOアプリ作成のメモ

## HTMLについて

<https://zenn.dev/wkb/books/node-tutorial/viewer/todo_01>

```<head></head>```でデータの形式(文字コードなど)を指定

```<body></body>```に内容を書き込む

入力フォームは、入力されたデータ等の送信先を指定する ```<form></form>``` と入力フォームを表示する ```<input> ```で作成。

```<input>```にはさまざまな属性あり。
- type="text"(1行入力), "email"(メールアドレス), "passward"(パスワード)
- name="add"(フォームの名前)
- placeholder="文字列"(フォームに初期表示する文字)

## JavaScriptについて

基礎文法：<https://qiita.com/Fendo181/items/cca476da99e8f09b6b97>

```document.queySelector('.add')```によってclass名がaddになっている```<form></form>```の間の要素が取得される

```addEventLiistener```をEnter押下のタイミングで実行

```addTodo```はオブジェクトtodosにやることを記入していく

```renderTodo```はtodoリストを表示させる。

その中にある```forEach(todo => ...)```はtodoの中から順番に取り出して引数にするという意味

