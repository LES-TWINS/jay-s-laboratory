
gsap.fromTo('body',{opacity: 0,  }, {opacity:1,   duration:1.2},)

gsap.fromTo('.nav-item',{opacity: 0, y:-500, }, {opacity:1, y:0,  ease:"slow(0.7, 0.7, false)", duration:1.3},'<10%')

gsap.fromTo('.registration_box',{opacity: 0 }, {opacity:1, duration:2.5},'<100%')



gsap.fromTo('.course-box',{opacity: 0,x:-70 }, {opacity:1,x:0, ease:  "back.out(1.7)", duration:1.5},'<5%')
gsap.fromTo('.card-body h5',{opacity: 0,x:30, }, {opacity:1,x:0, duration:1.5},'<40%')
gsap.fromTo('.card-body p',{opacity: 0,x:-20, }, {opacity:1,x:0, duration:1.5},'<20%')

gsap.fromTo('.test5',{opacity: 0,x:550, }, {opacity:1,x:0,ease: "expo.inOut", duration:2.7})
gsap.fromTo('.test4',{opacity: 0,x:500, }, {opacity:1,x:0,ease: "expo.inOut", duration:3})
gsap.fromTo('.test3',{opacity: 0,y:-1050, }, {opacity:1,y:0,ease: "back.inOut(1.7)", duration:1.5},'<50%')
gsap.fromTo('.test2',{opacity: 0,x:-500, }, {opacity:1,x:0,ease: "expo.inOut", duration:3})
gsap.fromTo('.test1',{opacity: 0,x:-550, }, {opacity:1,x:0,ease: "expo.inOut", duration:2.7})


gsap.fromTo('.about_h',{opacity: 0, }, {opacity:1, duration:2.7},'<50%')

gsap.fromTo('.about_p1',{opacity: 0 }, {opacity:1,duration:1.2},'<10%')
gsap.fromTo('.about_p2',{opacity: 0 }, {opacity:1, duration:1.2},'<10%')
gsap.fromTo('.about_p3',{opacity: 0}, {opacity:1, duration:1.2},'<10%')
gsap.fromTo('.about_p4',{opacity: 0}, {opacity:1, duration:1.2},'<10%')
gsap.fromTo('.about_p5',{opacity: 0,}, {opacity:1, duration:1.2},'<10%')







gsap.from('#teacher_card1, #teacher_card2, #teacher_card3,#teacher_card4' , {duration: 2, rotationX: 45,  scaleX: 1.0, z: -300});
gsap.from('#teacher_card5, #teacher_card6, #teacher_card7,#teacher_card8' , {duration: 2, rotationX: 45,  scaleX: 1.0, z: -300});


gsap.fromTo('.english_col',{opacity: 0,x:-70, }, {opacity:1,x:0,ease: "back.inOut(1.7)", duration:1.5},'<50%')
gsap.fromTo('#app',{opacity: 0,x:70, }, {opacity:1,x:0,ease: "back.inOut(1.7)", duration:1.5},'<50%')
gsap.fromTo('.submit_btn',{opacity: 0,y:-50, }, {opacity:1,y:0,ease: "back.inOut(1.7)", duration:1.5},'<50%')





$('.Navigation--collapsed').click(function() {
  $('.Overlay').toggleClass('Overlay--on');
  $('.BurgerMenu').toggleClass('BurgerMenu--on');

});


$(document).ready(function(){
  $(".Navigation--collapsed").click(function(){
    $('body').css ("overflow","hidden");
    $(".Navigation--collapsed").click(function(){
      $('body').css ("overflow","scroll");
    });
  });
});


  
function show() {
  
    var x = document.getElementById('main--section');
    var y =document.getElementById('registration--box');
    var t=document.getElementById('second_reg_btn');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'none';
      gsap.fromTo('.main_section',{ y:-1000,opacity: 0}, {y:0,opacity:1,ease: "power3.out", duration:1.2})
      gsap.fromTo('.second_reg_btn',{opacity: 0,y:50, }, {opacity:1,y:0,ease: "back.in(1.7)", duration:1},'<20%')
    } 
      else  {
        x.style.display = 'none';
        y.style.display = 'flex';
        gsap.fromTo('.registration_box',{opacity:0,}, {opacity:1, duration:1.5})
    }
  }
  function hide() {
     show();
  }
  function showSuccess(){
     var z =document.getElementById('success');
     var y =document.getElementById('registration--box');
     if(z.style.display ==='none'){
       z.style.display='flex';
       gsap.from('#success', {rotationX: 55,  scaleX: 0.8, z: -300})
       hide();
     } 
     if(y.style.display==='flex'){
        y.style.display='none'
     } else {
      z.style.display='none';
      y.style.display='flex'
      gsap.fromTo('#registration--box',{opacity:0,}, {opacity:1, duration:1.5})
     }
  }
  function hide2(){
    showSuccess();
  }

function showTest(){
  var x =document.getElementById('intro--box');
  var y =document.getElementById('registration--box');
  var t =document.getElementById('main--section');
  var a =document.getElementById('success');
  var o =document.getElementById('overlay');
  var b = window.matchMedia("(max-width: 700px)")
  if(b.matches){
    o.style.display='none'
  }
 
  if(x.style.display =='none'){
    x.style.display ='flex'
    gsap.from('#intro--box', {rotationX: 45,  scaleX: 0.8, z: -300, duration:0.7})
    gsap.fromTo('#heading1',{opacity:0,}, {opacity:1, duration:1.2},'<50%')
    gsap.fromTo('#heading2',{opacity:0,}, {opacity:1, duration:1.2},'<15%')
    gsap.fromTo('#heading3',{opacity:0,}, {opacity:1, duration:1.2},'<15%')
    gsap.fromTo('#test_btn',{y:30,opacity:0,}, {y:0,opacity:1,ease: "expo.out", duration:0.7},'<35%')
    y.style.display='none'
    t.style.display='none'
    a.style.display='none'
    
  }
}





const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 1200;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}



