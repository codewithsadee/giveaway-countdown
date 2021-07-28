
// image slider begin ---------------------------------------------------------

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var imageBox = document.querySelector(".img-box img");

var images = [
  "./assets/images/alienware-1.png",
  "./assets/images/alienware-2.png"
];

var count = 0;

prevBtn.addEventListener("click", function () {
  if (count <= 0) {
    count = 0;
  } else {
    count--;
  }
  imageBox.src = images[count];
});

nextBtn.addEventListener("click", function () {
  if (count >= images.length - 1) {
    count = images.length - 1;
  } else {
    count++;
  }
  imageBox.src = images[count];
});

// image slider end --------------------------------------


// countdown begin --------------------------------------

var time = {
  days: document.querySelector(".days .number"),
  hours: document.querySelector(".hours .number"),
  mins: document.querySelector(".mins .number"),
  secs: document.querySelector(".secs .number")
}

// countdown setup

var endSeconds = 59;
var endMinutes = 59;
var endHours = 23;
var endDays = 31;

var timeCapture = function () {
  setTimeout(function () {
    var date = new Date();
    time.secs.innerText = endSeconds - date.getSeconds();
    time.mins.innerText = endMinutes - date.getMinutes();
    time.hours.innerText = endHours - date.getHours();
    time.days.innerText = endDays - date.getDate();
    timeCapture();
  }, 1000);
}

timeCapture();