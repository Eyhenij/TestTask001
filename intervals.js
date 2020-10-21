// Вводим начальные данные
let arrInputData = ["m2", "Fb", "asc"];

// ============================================================================
// Задаём интервал (формат: id3 - качество интервалов (градусы), id4 - количество интервалов (полутона))
let arrIntervals = [
  {id3: 2, id4: 1 , name: "m2"},
  {id3: 2, id4: 2 , name: "M2"},
  {id3: 3, id4: 3 , name: "m3"},
  {id3: 3, id4: 4 , name: "M3"},
  {id3: 4, id4: 5 , name: "P4"},
  {id3: 5, id4: 7 , name: "P5"},
  {id3: 6, id4: 8 , name: "m6"},
  {id3: 6, id4: 9 , name: "M6"},
  {id3: 7, id4: 10, name: "m7"},
  {id3: 7, id4: 11, name: "M7"},
  {id3: 8, id4: 12, name: "P8"},
];

let i1 = arrIntervals.find(item => item.name == arrInputData[0]);
let inputInterval1 = i1.id3; // Количество градусов (id3) исходного интервала

let i2 = arrIntervals.find(item => item.name == arrInputData[0]);
let inputInterval2 = i2.id4; // Количество полутонов (id4) исходного интервала
alert(`Заданный интервал ${arrInputData[0]} в градусах  = ${inputInterval1}. 
Заданный интервал ${arrInputData[0]} в полутонах  = ${inputInterval2}`);

// ============================================================================
// Задаём массив нот (id - качество интервалов (градусы))
let arrNotes = [
  {id: 1, id2: 12, name: "Cb"},
  {id: 1, id2: 1 , name: "C" },
  {id: 1, id2: 2 , name: "C#"},
  {id: 2, id2: 2 , name: "Db"},
  {id: 2, id2: 3 , name: "D" },
  {id: 2, id2: 4 , name: "D#"},
  {id: 3, id2: 4 , name: "Eb"},
  {id: 3, id2: 5 , name: "E" },
  {id: 3, id2: 6 , name: "E#"},
  {id: 4, id2: 5 , name: "Fb"},
  {id: 4, id2: 6 , name: "F" },
  {id: 4, id2: 7 , name: "F#"},
  {id: 5, id2: 7 , name: "Gb"},
  {id: 5, id2: 8 , name: "G" },
  {id: 5, id2: 9 , name: "G#"},
  {id: 6, id2: 9 , name: "Ab"},
  {id: 6, id2: 10, name: "A" },
  {id: 6, id2: 11, name: "A#"},
  {id: 7, id2: 11, name: "Bb"},
  {id: 7, id2: 12, name: "B" },
  {id: 7, id2: 1 , name: "B#"},
];

// Находим позицию стартовой ноты в градусах и полутонах
let p = arrNotes.find(item => item.name == arrInputData[1]);
let startPosition = p.id;
let p2 = arrNotes.find(item => item.name == arrInputData[1]);
let startPosition2 = p2.id2;
alert(`Стартовая нота : ${arrInputData[1]}.
Стартовая позиция в градусах = ${startPosition}.
стартовая позиция в полутонах = ${startPosition2}`);

// ============================================================================
// Сумма позиций стартовой ноты и исходного интервала (в градусах)
let n = startPosition + inputInterval1 - 1;
let findedNotePosition;
if (n>7) {
  findedNotePosition = n-7
}
else findedNotePosition = n;

// ============================================================================
// Находим ноту по исходной позиции (в градусах)
let arrNotes2 = [
  {id: 1 , id1: 1, name: "C"},
  {id: 3 , id1: 2, name: "D"},
  {id: 5 , id1: 3, name: "E"},
  {id: 6 , id1: 4, name: "F"},
  {id: 8 , id1: 5, name: "G"},
  {id: 10, id1: 6, name: "A"},
  {id: 12, id1: 7, name: "B"},
];
let findedNote = arrNotes2.find(item => item.id1 == findedNotePosition);
let findedNoteName = findedNote.name 

// Находим позицию новой ноты в полутонах
let findedNote2 = arrNotes.find(item => item.name == findedNoteName);
let findedNotePosition2 = findedNote2.id2;
alert(`Найденная нота : ${findedNoteName}.
Позиция в градусах = ${findedNotePosition}
Позиция в полутонах = ${findedNotePosition2}`);

// Находим разницу в позициях между стартовой нотой и найденной нотой (в полутонах)
let n2 = startPosition2 - findedNotePosition2;
let k2
if (n2<0) {
  k2 = n2 + 12;
}
else k2 = n2;
alert(k2);

// Находим разницу в позициях между стартовой нотой и найденной нотой (в полутонах)
let n3 = inputInterval2 - k2;
alert(`Нам нужно подвинуть найденную ноту на ${n3} полутон(а)`);

// ============================================================================
// Двигаем найденную ноту
let findedNotePosition3 = findedNotePosition2 + n3

// Ищем конечную ноту в полном массиве нот
let findedNote3 = arrNotes.find(item => item.id2 == findedNotePosition3);
let wrightNote = findedNote3.name;
alert(`Конечная нота : ${wrightNote}`);