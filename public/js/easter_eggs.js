//thank you http://www.yourinspirationweb.com/en/fun-with-javascript-jquery-and-konami-code/ //
const SERVER = location.protocol + '//' + location.hostname + ':' + location.port;
const KONAMI  = '38,38,40,40,37,39,37,39,66,65'; //up up down down left right left right b a
const KONAMI_URL = "http://www.8bbit.com/play/contra/1125";
const OOT = '79,79,84,37,38,39,37,38,39'; //o o t left up right left up right
const OOT_URL = SERVER+'fun/zeldas_lullaby.mp3'; // I DO NOT OWN THIS SONG!!!
const PIKA = '80,73,75,65,67,72,85,73,67,72,79,79,83,69,89,79,85'//'pikachuichooseyou'
const PIKA_URL = "https://www.youtube.com/watch?v=_CvBNRxpRqU";

let entered = "";
let keys = [];

$(document).keydown(
  function(e) {
      keys.push(e.keyCode);
      entered = keys.toString();
      if (entered.indexOf(KONAMI) >= 0) {
          console.log("Konami activated");
          window.open(KONAMI_URL, '_blank');
          keys = [];
      }
      if (entered.indexOf(OOT) >= 0) { // thank you http://stackoverflow.com/a/8489802/5702582 //
          console.log("OOT activated");
          let audioElement = document.createElement('audio');
          audioElement.setAttribute('src', OOT_URL);
          audioElement.setAttribute('autoplay', 'autoplay');
          audioElement.play();
          keys = [];
      }
      if (entered.indexOf(PIKA) >= 0) {
          console.log("Pika activated");
          window.open(PIKA_URL, '_blank');
          keys = [];
      }
  }
);
