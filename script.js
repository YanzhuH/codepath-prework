// global constants
// optional - speed it up
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const clueHoldTimeReduce = 30;

//Global Variables
//var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var pattern = new Array(getRandomInt(3) + 6);
for (let i = 0; i < pattern.length; i++) {
  pattern[i] = getRandomInt(7) + 1;
  console.log(pattern[i]);
}
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
//optional - Give the player 3 strikes
var mistake = 2;
//optional - clock ticking - 1 minute countdown
var deadline = 0;
var timeinterval;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistake = 0;
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  //initialize clock
  if(deadline <= 0 || deadline != new Date(Date.parse(new Date()) + 1 * 60 * 1000)) {
    deadline = new Date(Date.parse(new Date()) + 1 * 60 * 1000);
    initializeClock("clockdiv", deadline);

  }
}

function stopGame() {
  gamePlaying = false;
  clearInterval(timeinterval);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  // freqMap for do re mi fa so la ti
  1: 261.6,
  2: 293.7,
  3: 329.6,
  4: 349.2,
  5: 392,
  6: 440,
  7: 493.88
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    // speed the game up as turns go
    clueHoldTime = clueHoldTime - clueHoldTimeReduce;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  // check time by using the ticking clock
  if(new Date() < deadline) {
    if(pattern[guessCounter] == btn) {
      if(guessCounter == progress) {
        if(progress == pattern.length - 1) {
          winGame();
        } else {
          progress++;
          playClueSequence();
        }
      } else {
        guessCounter++;
      }
    } else {
      mistake++;
      console.log("mistake: " + mistake);
      alert("You have a mistake. You have " + (3 - mistake) + " chances.");
      if(mistake > 2) {
        loseGame();
      } else {
        if(guessCounter == progress){
          if(progress == pattern.length - 1){
            winGame();
          }else{
            progress++;
            playClueSequence();
          }
        }else{
          guessCounter++;
        }
      }
    }
  } else {
    stopGame();
    alert("COUNTDOWN COMPLETE!");
    loseGame();
  }
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    total: t,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  timeinterval = setInterval(updateClock, 1000);
}


