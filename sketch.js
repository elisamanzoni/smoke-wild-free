var song_b1
var song_b2
var song_b3
var song_b4
var totalSong
var counter = 0;

function preload(){
  song_b1 = loadSound("music_03.mp3");
  song_b2 = loadSound("music_01.mp3");
  song_b3 = loadSound("music_04.mp3");
  song_b4 = loadSound("music_02.mp3");
  totalSong = loadSound("Young Wild and Free.mp3");
}

function setup() {
  var b1 = select('#b1');
  b1.mousePressed(start_b1);

  var b2 = select('#b2');
  b2.mousePressed(start_b2);

  var b3 = select('#b3');
  b3.mousePressed(start_b3);

  var b4 = select('#b4');
  b4.mousePressed(start_b4);

  var reset = select('#reset');
  reset.mousePressed(start_reset);

  var play = select('#play');
  play.mousePressed(start_play);
}

function start_b1() {
  var b1 = select('#b1');

  if (song_b1.isPlaying() == false &&
    song_b2.isPlaying() == false &&
    song_b3.isPlaying() == false &&
    song_b4.isPlaying() == false) {
      song_b1.play();
      b1.addClass('red');
      if (counter == 2){
      counter ++;
    }
    else {
      counter = 0;
    }
    console.log(counter);

    }

}

function start_b2() {
  var b2 = select('#b2');

  if (song_b1.isPlaying() == false &&
    song_b2.isPlaying() == false &&
    song_b3.isPlaying() == false &&
    song_b4.isPlaying() == false) {
      song_b2.play();
      b2.addClass('green');

      if (counter == 0){
      counter ++;
    }
    else {
      counter = 0;
    }
    console.log(counter);
    }

}

function start_b3() {
  var b3 = select('#b3');

  if (song_b1.isPlaying() == false &&
    song_b2.isPlaying() == false &&
    song_b3.isPlaying() == false &&
    song_b4.isPlaying() == false) {
      song_b3.play();
      b3.addClass('blue');

      if (counter == 3){
      counter ++;
    }
    else {
      counter = 0;
    }
    console.log(counter);

    }
}

function start_b4() {
  var b4 = select('#b4');

  if (song_b1.isPlaying() == false &&
    song_b2.isPlaying() == false &&
    song_b3.isPlaying() == false &&
    song_b4.isPlaying() == false) {
      song_b4.play();
      b4.addClass('yellow');

      if (counter == 1){
      counter ++;
    }
    else {
      counter = 0;
      }

console.log(counter);
    }
}

function start_reset() {
  counter = 0;
  console.log(counter);

  var b1 = select('#b1');
  b1.removeClass('red');
  song_b1.stop();

  var b2 = select('#b2');
  b2.removeClass('green');
  song_b2.stop();

  var b3 = select('#b3');
  b3.removeClass('blue');
  song_b3.stop();

  var b4 = select('#b4');
  b4.removeClass('yellow');
  song_b4.stop();
}

function start_play(){
  if (counter == 4 &&
    song_b1.isPlaying() == false &&
    song_b2.isPlaying() == false &&
    song_b3.isPlaying() == false &&
    song_b4.isPlaying() == false &&
    totalSong.isPlaying() == false) {

      totalSong.play();
  }
  else{
    counter = 0;
    console.log(counter);

    var b1 = select('#b1');
    b1.removeClass('red');
    song_b1.stop();

    var b2 = select('#b2');
    b2.removeClass('green');
    song_b2.stop();

    var b3 = select('#b3');
    b3.removeClass('blue');
    song_b3.stop();

    var b4 = select('#b4');
    b4.removeClass('yellow');
    song_b4.stop();
  }
}

function draw() {

}
