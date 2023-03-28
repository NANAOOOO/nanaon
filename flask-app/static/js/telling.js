// 要素の取得
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

// クリック時間の制御
let clickTime = 0

// いいね数をカウント
let timesClicked = 0

// クリックイベントの登録
loveMe.addEventListener('click', (e) => {
  if(clickTime === 0) {
    clickTime = new Date().getTime() // UNIX TIMEでデータを取得できる
  } else {
    if((new Date().getTime() - clickTime) < 800) {
      createHeart(e)
      clickTime = 0 // 初期化
    } else {
      clickTime = new Date().getTime()
    }
  }
})


// ハートの作成
const createHeart = (e) => {
    // https://fontawesome.com/
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

 // 子要素として追加
 loveMe.appendChild(heart)
 
 // いいね数を増加して挿入
 times.innerHTML = ++timesClicked

 // クリックするとハート要素が無限に増えていくため、5秒後に削除
 setTimeout(() => heart.remove(), 5000)
}