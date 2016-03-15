//thank you http://www.yourinspirationweb.com/en/fun-with-javascript-jquery-and-konami-code/ //
var keys = [];
var konami  = '38,38,40,40,37,39,37,39,66,65'; //up up down down left right left right b a
var konami_url = "http://www.8bbit.com/play/contra/1125";
var oot = '79,79,84,37,38,39,37,38,39'; //o o t left up right left up right
var oot_url = 'fun/zeldas_lullaby.mp3'; //NOTE: I DO NOT OWN THIS SONG!!!
var pika = '80,73,75,65,73,67,72,79,79,83,69,89,79,85'; //'pikachuichooseyou'
var pika_url = "https://www.youtube.com/watch?v=MHqI-vwh83o";
var entered = "";

$(document).keydown(
        function(e) {
            keys.push( e.keyCode );
            entered = keys.toString();
            if ( entered.indexOf( konami ) >= 0 ) {
                console.log("Konami activated");
                $(location).attr('href', konami_url);
                keys = [];
            }
            if ( entered.indexOf( oot ) >= 0 ) { // thank you http://stackoverflow.com/a/8489802/5702582 //
                console.log("OOT activated");
                var audioElement = document.createElement('audio');
                audioElement.setAttribute('src', oot_url);
                audioElement.setAttribute('autoplay', 'autoplay');
                audioElement.play();
                keys = [];
            }
            if ( entered.indexOf( pika ) >= 0 ) {
                console.log("Pika activated");
                $(location).attr('href', pika_url);
                keys = [];
            }
        }
);
