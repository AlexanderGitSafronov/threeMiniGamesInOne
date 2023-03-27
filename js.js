

alert('Привет! Добро пожаловать в "Игромат" версии 0.1');

function gameSelection() {
  const gameList = prompt(
    'Выбери игру: \n 1 - Угадалка; \n 2 - Считалка; \n 3 - Кликалка; \n Для выхода введи "Выход"'
  );
  if (+gameList === 1 || gameList === "угадалка") {
    fortuneЕeller();
  } else if (+gameList === 2 || gameList === "считалка") {
    countingRhyme();
  } else if (+gameList === 3 || gameList === "кликалка") {
    clicker();
  } else if (gameList === "Выход") {
    alert("Пока, пока");
  } else {
    alert("Не правильный ввод, попробуй еще раз =(");
    gameSelection();
  }
}
gameSelection();


//FIRST GAME


function fortuneЕeller() {
  alert("Игра запускается...");
  alert('Игра "Угадалка"');
  alert(`Я случайным образом загадаю число от 1 до 100
    Твоя задача его угадать за минимальное количество
    попыток
    После кажого твоего ввода я буду говорить больше твое 
    число или меньше загаданого.
    Начнем?`);
  let guessingValue = +prompt("Попробуй угадать");
  const fortuneRandom = Math.floor(Math.random() * 100);
  for (let i = 0; i < 100; i++) {
    if (guessingValue < fortuneRandom) {
      alert("Слишком мало");
      guessingValue = +prompt("Попробуй угадать");
    } else if (guessingValue > fortuneRandom) {
      alert("Слишком много");
      guessingValue = +prompt("Попробуй угадать");
    } else if (guessingValue === fortuneRandom) {
      alert("Угадал!");
      alert('Тебе удалось угадать за ' + i + ' попыток')
      break;
    } else {
        alert('Не верній ввод =(');
        guessingValue = +prompt("Попробуй угадать");
        continue;
    }
  }
  
  gameSelection();
}


// END FIRST GAME
// SECOND GAME


function countingRhyme() {
  alert("Игра запускается...");
  alert('Игра "Считалка"');
  alert(
    "Я случайным образом буду давать задание по арифметике. Твоя задача правильно решить 5 приемов.\nНачнем?"
  );

 
  let numResultRes;
  let resulGame = 0;
  for (let i = 0; i < 5; i++) {
    let nambRandom = Math.floor(Math.random() * 20);
    let nambRandom2 = Math.floor(Math.random() * 20);


    
    let nambRandomList = Math.floor(Math.random() * 15);
    let list;
    if (nambRandomList <= 5) {
        list = '+';
    } else if (nambRandomList > 5 && nambRandomList <= 10 ){
        list = '-';
    } else if (nambRandomList > 10 && nambRandomList <= 15){
        list = '*';
    }
     let numResult = +prompt(nambRandom + ' ' + list + ' ' + nambRandom2);
    console.log(list);

    if(list === '+') {
        numResultRes = nambRandom + nambRandom2;
    } else if (list === '-') {
        numResultRes = nambRandom - nambRandom2;
    } else if (list === '*') {
        numResultRes = nambRandom * nambRandom2;
    }
    



    if (numResult === numResultRes) {
      resulGame += 1;
    } else {
      resulGame += 0;
    }
  }
  alert("Правильных ответов " + resulGame + " из 5");
  gameSelection();
}


// END SECOND GAME
// THIRD GAME


function clicker() {
  alert("Игра запускается...");
  alert('Игра "Кликалка"');
  alert(
    `Я случайным образом буду показывать 10 сисстемных окон.
      Твоя задача как можно быстрее прокликать все.
      При этом в окне confirm нужно нажимать "Отмена".
      Начнем?`
  );
 
  
  let b = 0;
  function calcylate(a) {
   let confButt = confirm('Нажми "Отмена"');
    if (a <= 5) {
        alert('Просто нажми "ok"')
    } else{
        confButt;
    
    } 
    
    
  }

  for( let i = 0; i < 10; i++) {
    let clickerRandomList = Math.floor(Math.random() * 10);
    calcylate(clickerRandomList);
   
  }
 
  alert('Ошибок:' + b);
}
