// Вводим начальные данные
let arrInputData = ["P5", "A#", "asc"];

// ============================================================================
// Для удобства введём для значений нот в градусах и полутонах переменный "х" и "у"
// Переменная "x" - будет хранить значения градусов нот
// Переменная "y" - будет хранить значения полутоной нот
// Для стартовой ноты это будут переменные               "x1" и "y1"
// Для заданного интервала смещения это будут переменные "x2" и "y2"
// Для найденной промежуточной ноты это будут переменные "x3" и "y3"
// Для итоговой искомой ноты это будут переменные        "x4" и "y4"
// Задаём интервал (формат: id3 - качество интервалов (градусы), id4 - количество интервалов (полутона))
let arrIntervals = [
  {x: 2, y: 1 , name: "m2"},
  {x: 2, y: 2 , name: "M2"},
  {x: 3, y: 3 , name: "m3"},
  {x: 3, y: 4 , name: "M3"},
  {x: 4, y: 5 , name: "P4"},
  {x: 5, y: 7 , name: "P5"},
  {x: 6, y: 8 , name: "m6"},
  {x: 6, y: 9 , name: "M6"},
  {x: 7, y: 10, name: "m7"},
  {x: 7, y: 11, name: "M7"},
  {x: 8, y: 12, name: "P8"},
];

let i1 = arrIntervals.find(item => item.name == arrInputData[0]);
let x1 = i1.x; // Количество градусов (id3) исходного интервала

let i2 = arrIntervals.find(item => item.name == arrInputData[0]);
let y1 = i2.y; // Количество полутонов (id4) исходного интервала
alert(`Заданный интервал ${arrInputData[0]} в градусах  = ${x1}. 
Заданный интервал ${arrInputData[0]} в полутонах  = ${y1}`);

// ============================================================================
// Задаём массив нот (id - качество интервалов (градусы))
let arrNotes = [
  {x: 1, y: 12, name: "Cb"},
  {x: 1, y: 1 , name: "C" },
  {x: 1, y: 2 , name: "C#"},
  {x: 2, y: 2 , name: "Db"},
  {x: 2, y: 3 , name: "D" },
  {x: 2, y: 4 , name: "D#"},
  {x: 3, y: 4 , name: "Eb"},
  {x: 3, y: 5 , name: "E" },
  {x: 3, y: 6 , name: "E#"},
  {x: 4, y: 5 , name: "Fb"},
  {x: 4, y: 6 , name: "F" },
  {x: 4, y: 7 , name: "F#"},
  {x: 5, y: 7 , name: "Gb"},
  {x: 5, y: 8 , name: "G" },
  {x: 5, y: 9 , name: "G#"},
  {x: 6, y: 9 , name: "Ab"},
  {x: 6, y: 10, name: "A" },
  {x: 6, y: 11, name: "A#"},
  {x: 7, y: 11, name: "Bb"},
  {x: 7, y: 12, name: "B" },
  {x: 7, y: 1 , name: "B#"},
];

// Находим позицию стартовой ноты в градусах и полутонах
let p = arrNotes.find(item => item.name == arrInputData[1]);
let x2 = p.x;
let p2 = arrNotes.find(item => item.name == arrInputData[1]);
let y2 = p2.y;
alert(`Стартовая нота : ${arrInputData[1]}.
Стартовая позиция в градусах = ${x2}.
стартовая позиция в полутонах = ${y2}`);

// ============================================================================
// Находим ступень промежуточной ноты "x3" (в градусах). Для этого складываем градусы исходной ноты и интервала.


let n = x1 + x2 - 1;
let x3;
if (n>7) {
  x3 = n-7;
}
else x3 = n;

// ============================================================================
// Находим название промежуточной ноты по исходной позиции (в градусах)
let arrNotes2 = [
  {y: 1 , x: 1, name: "C"},
  {y: 3 , x: 2, name: "D"},
  {y: 5 , x: 3, name: "E"},
  {y: 6 , x: 4, name: "F"},
  {y: 8 , x: 5, name: "G"},
  {y: 10, x: 6, name: "A"},
  {y: 12, x: 7, name: "B"},
];
let findedNote = arrNotes2.find(item => item.x == x3);
let findedNoteName = findedNote.name 

// Находим позицию промежуточной ноты в полутонах
let findedNote2 = arrNotes.find(item => item.name == findedNoteName);
let y3 = findedNote2.y;
alert(`Найденная нота : ${findedNoteName}.
Позиция в градусах = ${x3}
Позиция в полутонах = ${y3}`);

// Находим насколько нам нужно сместить положение промежуточной ноты по "y" (в полутонах)
let n2 = y1 - 12 + y2 - y3;
let y4;

alert (n2);

if (n2 < -12) {y4 = n2 + 12}
else if (n2 <= 0) {y4 = n2}
else if (n2 > 0) {y4 = n2}
else if (n2 > 12) {y4 = n2 - 12};

// ============================================================================
// Называем правильную ноту
let arrNotes3 = [
  {name1: "Cbb", name2: "Cb", name3: "C", name4: "C#", name5: "C##"},
  {name1: "Dbb", name2: "Db", name3: "D", name4: "D#", name5: "D##"},
  {name1: "Ebb", name2: "Eb", name3: "E", name4: "E#", name5: "E##"},
  {name1: "Fbb", name2: "Fb", name3: "F", name4: "F#", name5: "F##"},
  {name1: "Gbb", name2: "Gb", name3: "G", name4: "G#", name5: "G##"},
  {name1: "Abb", name2: "Ab", name3: "A", name4: "A#", name5: "A##"},
  {name1: "Bbb", name2: "Bb", name3: "B", name4: "B#", name5: "B##"},
];

let findedNote3 = arrNotes3.find(item => item.name3 == findedNoteName);
let wrightNote;

switch (y4) {
  case 1: wrightNote = findedNote3.name4;
    break;
  case 2: wrightNote = findedNote3.name5;
    break;
  case -1: wrightNote = findedNote3.name2;
    break;
  case -2: wrightNote = findedNote3.name1;
    break;
  default: alert ("Что-то в моей программе пошло не так...");
};

alert(`Конечная нота : ${wrightNote}`);
