//Getting date and time
function updateDate() {
  var now = new Date();
  var day = now.getDate();
  var month = now.toLocaleString('default', { month: 'long' }); // get the month name in letters
  var year = now.getFullYear();

  document.getElementById('day').innerHTML = day < 10 ? '0' + day : day;
  document.getElementById('month').innerHTML = month;
  document.getElementById('year').innerHTML = year;
}

// update the date every second
setInterval(updateDate, 1000/60);

//printing time
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0')
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  const secondsElement = document.getElementById('seconds');

}
//updating time at 60fps
setInterval(updateTime, 1000 / 60);


const startVideo = async () => {
  const video = document.querySelector('#iphone_vid');

  try {
      await video.play();

      video.setAttribute('autoplay', true);

      console.log('video started playing successfully');
  } catch (err) {
    console.log(err, 'video play error');
    // do stuff in case your video is unavailable to play/autoplay
  }
}
//starts video 5 seconds after website loads
setTimeout(startVideo, 4500)


//Whenever user reloads the page, they are sent back to the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


//Scrolling Animation 
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




//music play

document.getElementById('play').addEventListener('click', function (e) {
 e.preventDefault();
  var audio = document.getElementById("audio");
  if (audio.paused == false){
    audio.pause();
}else{
    audio.play();
}
});


//Toggling class for Dynamic Island

const DynamicIsland = document.querySelector('.DynamicIsland;');
DynamicIsland.addEventListener('click', () => {
  DynamicIsland.classList.toggle('extended');
})