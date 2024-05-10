let AImove = 0;
let playerMove = 0;
let losses = 0;
let wins = 0;
let Ties = 0;
let Winstreak=0;
let WinstreakRecord=0;
let allScore = `${Ties}: נצחונות:${wins} הפסדים:${losses} תיקוים`;
let WinstreakTxt= `${Winstreak}:הרצף נצחונות שלך הוא`;
let WinstreakRecordTxt= `${WinstreakRecord}:שיא רצף הנצחונות שלך הוא`;
let allMove = "";
let name;
let WinningSound = new Audio("WinningSound.mp3")
let LossingSound = new Audio("LossingSound.mp3")

name = window.prompt("מה השם שלך?")

alert(' בהצלחה ' + name + '!')

var paragraph1 = document.getElementById("ScoreTxt");
var paragraph2 = document.getElementById("movesTxt");
var paragraph3 = document.getElementById("WinstreakClass");
var paragraph4 = document.getElementById("WinstreakRecordClass");

paragraph1.textContent = allScore;
paragraph2.textContent = allMove;
paragraph3.textContent = WinstreakTxt;
paragraph4.textContent = WinstreakRecordTxt;

function WinstreakRecordFunction(){
  WinstreakRecord=Winstreak;
  let WinstreakRecordTxt= `${WinstreakRecord}:השיא שלך ברצף הנצחונות הוא`;

  paragraph4.textContent = WinstreakRecordTxt;
}
