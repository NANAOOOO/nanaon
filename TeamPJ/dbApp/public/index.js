const { response } = require("express");

function showComment() {
  const element = document.getElementById("comment-box"); //class名がcomment-boxのhtmlを代入
  console.log(element.value); //class名がcomment-boxのhtmlのvalueを表示
}

function addComment() {
  const msg = "Hello";
  const commentBox = document.createElement("div"); //div要素をつくる：.createElemant
  commentBox.setAttribute("class", "comment-box"); //指定の要素に新しい属性を追加：setAttribute

  const comment = document.createElement("p");
  commentBox.textContent = msg; //そのノード内部のテキストを指す：textcontent
  commentBox.appendChild(comment);//指定された親ノードの子ノードリストの末尾にノードを追加：appendChild

  // 挿入箇所のタグを取得
  const commentShow = document.getElementById("comment-show");
  commentShow.appendChild(commentBox);

  console.log("add new Comment to DOM");
}

// window.addEventListener('DOMContentLoaded', function () {
//   var editors = Copenhagen.initSelectorAll('.editor');
// });



// const bodyParser = require('body-parser');
// app.use(bodyParser.json());


//   fetch(url, options)
//     .then(res => res.json())
//     .then(json => {
//       console.log(json);

//       if (!json.token) {
//         throw new Error('Token not found in network response');
//       }

//       const token = json.token;
//       let submissionStatus = 'Processing';
  
//       const checkStatus = () => {
//         return fetch(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
//           headers: {
//             'X-RapidAPI-Key': '71aec70437mshf7a8d2deedb33f1p185b10jsn924da6036e40' // Replace this with your own API key
//           }
//         })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => {
//           if (!data.status) {
//             throw new Error('Status not found in network response');
//           }
  
//           submissionStatus = data.status.description;
  
//           if (submissionStatus !== 'Completed') {
//             return new Promise(resolve => {
//               setTimeout(resolve, 1000);
//             })
//             .then(() => {
//               return checkStatus();
//             });
//           } else {
//             return data;
//           }
//         });
//       };
  
//       return checkStatus();
//     })
//     .then(submissionDetails => {
//       const final = submissionDetails.stdout;
//       console.log(final);
//       res.render('show.ejs',{final:final});
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).send('An error occurred');
//     });
// });