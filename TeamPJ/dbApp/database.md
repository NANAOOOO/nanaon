## データベースの作成

スプレッドシートで例えるなら、**ファイル全体**

```sql
create database comments
```

## テーブルの作成

スプレッドシートで例えるなら、1 つのファイルの中の、**シート 1 枚**がテーブル。

https://www.javadrive.jp/postgresql/table/index1.html

### user テーブル

以下のカラム(列) を持つテーブルを作成します

- id: ユーザの id
- name: ユーザ名

```sql
create table users(
id integer,
name varchar(20));
```

### comments テーブル

以下のカラム(列) を持つテーブルを作成します

- commentId: コメントの id
- toName: コメントの送り先の名前。10 字以内
- fromName: コメントしたユーザの名前。10 字以内
- commentText: コメント内容。300 字以内

`commentId`については、自動で割り振ってもらいましょう！
(アプリを使う人が、次何番でコメントすればいいか、なんてわからないですもんね！万が一かぶったら、過去のコメントが上書きされてしまうかもしれません)

数値の自動割り当てについては、[こちら](https://www.javadrive.jp/postgresql/table/index10.html)

```sql
create table comments(
commentId integer generated always as identity,
toName varchar(10),
fromName varchar(10),
commentText varchar(300));
```

### 余談：テーブルの設計

本当は、toName や fromName は users テーブルと対応させて、を自動で参照することが多いです。例えば、ユーザにログインさせ、今のユーザの情報から自動でデータベースに追加するとか。今回は、簡易的にユーザー名としてます。

例えば、users テーブルに、アイコン画像やプロフィール情報を持たせるとします。

users テーブル

- id: ユーザの id
- name: ユーザ名
- profileImg: プロフィール画像

すると、コメント画面は以下のような手順でアイコンを表示できます！

1. コメントがあったら、`コメントしたユーザのid` を取得
2. `コメントしたユーザのid` をもとに、users テーブルで検索をし情報をとってくる(SELECT 文)
3. 得られたプロフィール画像を掲示板画面に表示

データベースの情報が重複しないように設計することがデータベースを扱うエンジニアの腕の見せ所です！興味のある人は、「データベース　正規化」「データモデリング」等で調べてみてください！

参考：

https://qiita.com/mochichoco/items/2904384b2856db2bf46c

### 一旦確認

> \dt;

を実行し、テーブルが 2 つ作成されていることを確認！

>          List of relations

     Schema |   Name   | Type  | Owner
    --------+----------+-------+-------
     public | comments | table | ayana
     public | users    | table | ayana
    (2 rows)

## データを追加する

テーブルにデータを追加しましょう

https://www.javadrive.jp/postgresql/insert/index1.html

**注意：**
文字列は、**シングルクォーテーション**で囲みましょう！

```sql
insert into users values (1,'waffle');
insert into users values (2,'choco');
```

### 確認

データが追加されているか確認しましょう

https://www.javadrive.jp/postgresql/select/index1.html

```sql
select * from users;
```

## やってみよう！

### アプリ側でデータの追加

> node app.js

でアプリを起動

Google Chrome で[http://localhost:3000/](http://localhost:3000/)にアクセス

表示されるフォームに、名前とコメントを追加

### Postgres で確認

ターミナルで以下を実行。postgres を起動

> psql -d comments

comments テーブルにデータが追加されているか確認しましょう！

```sql
select * from comments;
```


<!-- <% comments.forEach((item) => { %>
        <li>
          <div>
            <span><%= comments.id %></span>
            <span><%= comments.comments %></span>
          </div>
        </li>
      <% }) %> -->

<!-- <% re_test_table.forEach((item) => { %>
        <li>
          <div class="table">
            <div class="question"><%= item.question %></div>
            <div class="answer"><%= item.answer %></div>
          </div>
        </li>
      <% }) %>-->

       <ul class="table-body">
      <% re_test_table.forEach((item) => { %>
        <li>
          <div class="table">
            <div class="question"><%= item.question %></div>
            <div class="answer"><%= item.answer %></div>
          </div>
        </li>
      <% }) %>
    </ul>

      <div>
   <% for (let i = 0; i < results.length; ++i) {%>
    <div class="table">
      <div class="question"><p><%= results[i].question %></p></div>
      <div class="answer"><p></p><%= results[i].answer %></p></div>
    </div>
    <% } %>
    </div>


      res.render("show.ejs",  
        { 
          results:results
        }
          )

          <ul class="table-body">
      <% results.forEach((item) => { %>
        <li>
          <div class="table">
            <div class="question"><%= item.question %></div>
            <div class="answer"><%= item.answer %></div>
          </div>
        </li>
      <% }) %>
    </ul>

        <% if(submissionDetails === true){ %>
        
      <% } %>




<!-- <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Monaco Editor - Text Form Example</title>
    <!-- Load the Monaco Editor library -->
    <script src="https://unpkg.com/monaco-editor@0.27.0/min/vs/loader.js"></script>
    <script>
      // ここに実行後のコードを入れる
      let editorValue = '';

      // JavaScriptファイルおよびモジュールを組み込むRequireJSを利用する
      // Monaco Editor scriptsより先にコールされる必要がある
      // Monaco Editor
      require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.27.0/min/vs' } });
      // Load the Monaco Editor scripts
      require(['vs/editor/editor.main'], function() {
        // Create the text form
        const editorElement = document.getElementById('editor');
        const editor = monaco.editor.create(editorElement, {
          value: '',
          language: 'python'
        });
        
        const form = document.getElementById('/compile');
        
        form.addEventListener('submit', function(event) {
        event.preventDefault();
        editorValue = editor.getValue();
        console.log(editorValue);
        // Submit the form data to the server as needed
        });});
    </script>
  </head>
  <body>
    <!-- Create the text form element -->
    <form id="form" action = "/compile" method="post">
      <label for="editor">Code:</label>
      <div id="editor" style="height: 300px;"></div>
      <br>
      <button type="submit" value = "実行">実行</button>
    </form>
    <div>
      <h3>結果</h3>
      
  
      
    </div>
  </body>
</html> -->

    <!-- Create the text form element -->
    <form id="form" action = "/compile" method="post">
      <label for="editor">Code:</label>
      <div id="editor" style="height: 300px;"></div>
      <br>
      <button type="submit" value = "実行">実行</button>
    </form>
    <div>
      <h3>結果</h3>
  

   function showMessage() {
        var text = editor.getValue();
        alert(text);
    }

     const form = document.getElementById('/compile');
        
        form.addEventListener('submit', function(event) {
        event.preventDefault();
        editorValue = editor.getValue();
        console.log(editorValue);

        type="submit"
         value = "実行" 

      
       //
       const value = document.getElementById("form");
       value.addEventListener('submit', function(event) {
        event.preventDefault();
        editorValue = editor.getValue();
        console.log(editorValue);
        console.log(editor);
       const code = editor;

        //judge0
       const options = {
       method: 'POST',
       headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '71aec70437mshf7a8d2deedb33f1p185b10jsn924da6036e40',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      body: JSON.stringify({"language_id":52,"source_code":code,"stdin":"SnVkZ2Uw"})
      };
  
      fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*', options)
     .then(response => response.json())
     .then(response => console.log(response),judgedValue = response)
     .catch(err => console.error(err));
      target = document.getElementById("output");
      target.innerHTML = judgedValue;
      }
    );
    
      // Create the text form
      const editorElement = document.getElementById('editor');
          window.editor = monaco.editor.create(editorElement, {
          value: {'':''}.join('\n'),
          language: 'javascript'
        });
        // let editorValue = editor;
        console.log(window.editor.getValue())
      })

      function save() {
      // get the value of the data
      var value = window.editor.getValue()
      saveValueSomewhere(value);     
      }

            window.editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            'function x() {',
            '\tconsole.log("Hello world!");',
            '}'
        ].join('\n'),
        language: 'javascript'
    });


        <script src="https://unpkg.com/monaco-editor@0.27.0/min/vs/loader.js"></script>
    <script>
      // ここに実行後のコードを入れる
      
      // Monaco Editorに組み込まれたJavaScriptファイルおよびモジュールを組み込むRequireを利用する
      // Monaco Editor scriptsより先にここがコールされる必要がある
      // Monaco Editor
      require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.27.0/min/vs' } });
      // Load the Monaco Editor scripts
      require(['vs/editor/editor.main'], function() {
        const editorElement = document.getElementById('editor');
          window.editor = monaco.editor.create(editorElement, {
          value: '',
          language: 'javascript'
        })
});

function save() {
   // get the value of the data
   var value = window.editor.getValue()
   editorValue =  saveValueSomewhere(value.join('\n'));     
}

      function save() {
      // get the value of the data
      var value = window.editor.getValue()
      editorValue =  saveValueSomewhere(value.join('\n'));     
      }
  </script>   

      <form id="form1" name="form1" action="/compile" method="post">
      <label for="editor">Code:</label>
      <div id="editor" name = "editor" style="height: 300px;"></div>
      <br>
    <div>
      <input id="HTMLbutton" type="submit" value= "実行">実行</input>
    </div>
    </form> 

       <div class="input">
          <input type="text" id="word" placeholder="word" class="search-text" />
          <input type="text" id="num" placeholder="limit" class="search-text" />
          <button type="submit" id="button" class="search-button">
            <div id="text-button" onclick="pushButton()">
              <img src="https://i.ibb.co/SN1SDhM/typing-fast-typing.gif" />
            </div>
          </button>

     <div><iframe  class= "frame_center" src="https://widgets.judge0.com/" width="600" height="900"></iframe> </div>
     
           //  function saveI() 
      //   {
      //       // get the value of the data
      //       const Value = window.editor.getValue();
      //       console.log(Value);
      //       editorValue =  Value;
      //       //あとはsaveValueSomewhere()にapp.jsからfetchする内容を書く。app.jsがAPI扱いということ。
      //saveValueSomewhere(Value.join('\n'));
      //       const result = saveValueSomewhere(editorValue);
      //   };
      //   window.addEventListener('DOMContentLoaded', function () {
      //     document.getElementById('HTMLbutton').onclick = saveI;
      //   })       
  
      // async function saveValueSomewhere(editorValue) {
    // app.jsにeditorValueを届ける
    
    // return 3;
    //.then(res => res.json())はapp.jsに含めたので消しました
  

    // 画面に結果を表示する (DOM)
    // _________ = result;

//     function showjudge(judgeresult){
//       const data = judgeresult.results[0];
//       judged.textContent = data;
//     }

//     window.addEventListener('DOMContentLoaded',  function () {
//     document.querySelector("input[name=result]")  =showjudge;
// })