const bug = document.querySelector('.bug');
const score = document.querySelector('.current-score');
const level = document.querySelector('.current-level');
const start = document.querySelector('.click-to-start');

// 랜덤 숫자 반환
const randomNum = () => {
  return Math.floor(Math.random() * 90);
};

// left 랜덤 값
const getLeft = () => {
  return randomNum();
}

// top 랜덤 값
const getTop = () => {
  return randomNum();
};

// 버그 아이콘 랜덤 이동
const movingBug = () => {
  let left = getLeft();
  let top = getTop();
  bug.style.position = 'absolute';
  bug.style.left = left + 'vw';
  bug.style.top = top + 'vh';
};

// 알림창 클릭으로 시작
start.addEventListener('click', (e) => {
  let target = e.target.parentNode.parentNode;
  target.remove();
  setInterval(movingBug, 1000);
});

// 클릭당 10점 점수 기록
let count = 0;
bug.addEventListener('click', () => {
  count += 10;
  score.innerHTML = count;
  stageLevel();
  return;
});

// 점수에 따른 감탄사
const stageLevel = () => {
  let currentScore = parseInt(score.innerText);
  if (currentScore >= 100 && currentScore < 200) {
    level.innerText = 'COOL';
  } else if (currentScore >= 200 && currentScore < 300) {
    level.innerText = 'GOOD!';
  } else if (currentScore >= 300 && currentScore < 500) {
    level.innerText = 'GREAT!!';
  } else if (currentScore >= 500) {
    level.innerText = 'EXCELLENT!!!'
  }
  return;
};

