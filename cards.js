const greenCards = [
  'green1',
  'green2',
  'green3',
  'green4',
  'green5',
  'green6',
  'green7',
  'green8',
  'green9',
  'green10',
  'green11',
  'green12',
  'green13',
  'green14',
  'green15',
  'green16',
  'green17',
  'green18',
];

const brownCards = [
  'brown1',
  'brown2',
  'brown3',
  'brown4',
  'brown5',
  'brown6',
  'brown7',
  'brown8',
  'brown9',
  'brown10',
  'brown11',
  'brown12',
  'brown13',
  'brown14',
  'brown15',
  'brown16',
  'brown17',
  'brown18',
  'brown19',
  'brown20',
  'brown21',
];

const blueCards = [
  'navy1',
  'navy2',
  'navy3',
  'navy4',
  'navy5',
  'navy6',
  'navy7',
  'navy8',
  'navy9',
  'navy10',
  'navy11',
  'navy12',
];

// 4-green, 9-brown, 2 blue

let randomDeck = [];

// функция для рандома
function getRandomCards(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const cthulthuGreen = 4;
const cthulthuBrown = 9;
const cthulthuBlue = 2;

const cthulthuRandomGreen = [];
const cthulthuRandomBrown = [];
const cthulthuRandomBlue = [];

for(let i = 0; i < cthulthuGreen; i++) {
  cthulthuRandomGreen.push(greenCards[getRandomCards(0, greenCards.length - 1)]);
}
for(let i = 0; i < cthulthuBrown; i++) {
  cthulthuRandomBrown.push(brownCards[getRandomCards(0, brownCards.length - 1)]);
}
for(let i = 0; i < cthulthuBlue; i++) {
  cthulthuRandomBlue.push(blueCards[getRandomCards(0, blueCards.length - 1)]);
}

// console.log(cthulthuRandomGreen);
// console.log(cthulthuRandomBrown);
// console.log(cthulthuRandomBlue);

// stage1 = 0 green, 2 brown, 2 blue
const cthulthuStage1 = [
  cthulthuRandomBrown[0],
  cthulthuRandomBrown[1],
  cthulthuRandomBlue[0],
  cthulthuRandomBlue[1],
];
const cthulthuStage1Shuffle = cthulthuStage1.sort(()=>Math.random()-0.5);
console.log(cthulthuStage1Shuffle);

// stage2 = 1 green, 3 brown, 0 blue
const cthulthuStage2 = [
  cthulthuRandomGreen[0],
  cthulthuRandomBrown[2],
  cthulthuRandomBrown[3],
  cthulthuRandomBrown[4],
];
const cthulthuStage2Shuffle = cthulthuStage2.sort(()=>Math.random()-0.5);
console.log(cthulthuStage2Shuffle);

// stage3 = 3 green, 4 brown, 0 blue
const cthulthuStage3 = [
  cthulthuRandomGreen[1],
  cthulthuRandomGreen[2],
  cthulthuRandomGreen[3],
  cthulthuRandomBrown[5],
  cthulthuRandomBrown[6],
  cthulthuRandomBrown[7],
  cthulthuRandomBrown[8],
];
const cthulthuStage3Shuffle = cthulthuStage3.sort(()=>Math.random()-0.5);
console.log(cthulthuStage3Shuffle);

// собираем единую колоду
const cthulthuFinalDeck = cthulthuStage1.concat(cthulthuStage2, cthulthuStage3);
console.log(cthulthuFinalDeck);

// клик по божеству
const ancientsCard = document.querySelector('.ancients-card');
const difficulty = document.querySelector('.difficulty');
ancientsCard.addEventListener('click', function(){
  ancientsCard.classList.add('active'); 
  difficulty.classList.add('display');
});

// клик по сложности
const difficultyLvl = document.querySelector('.difficulty-lvl');
const decksShuffle = document.querySelector('.decks-shuffle');
difficultyLvl.addEventListener('click', function(){
  decksShuffle.classList.add('display'); 
  difficultyLvl.classList.add('active');
});

// клик по замешиванию
const decksStages = document.querySelector('.decks-stages');
const cards = document.querySelector('.cards');
decksShuffle.addEventListener('click', function(){
  decksStages.classList.add('display'); 
  cards.classList.add('display'); 
  decksShuffle.classList.remove('display');
});

// функция для вывода изображения
// const lastCardImg = document.querySelector('.last-card');
// let createImg = document.createElement('img');
// createImg.setAttribute('data-key', cthulthuFinalDeck[0]);
// createImg.src = 'assets/MythicCards/' + cthulthuFinalDeck[0][0] +'/'  + cthulthuFinalDeck[0] + '.png';
// lastCardImg.append(createImg);
// console.log(createImg.src);

// показываем карты по клику
const topCard = document.querySelector('.top-card');
const lastCard = document.querySelector('.last-card');
topCard.addEventListener('click', function(){
  // если массив пустой то прерываем функцию и убираем клики
  if(cthulthuFinalDeck.length == 0) {
    topCard.style.cursor = 'initial';
    return
  }

  // удаляем предыдущую карту
  let deleteImg = document.querySelector('.delete-img')
  deleteImg.parentNode.removeChild(deleteImg);

  // создаем и показываем карту
  let createImg = document.createElement('img');
  createImg.setAttribute('class', 'delete-img');
  createImg.src = 'assets/MythicCards/' + cthulthuFinalDeck[0][0] +'/'  + cthulthuFinalDeck[0] + '.png';
  lastCard.append(createImg);

  // уменьшаем массив
  cthulthuFinalDeck.shift()
});