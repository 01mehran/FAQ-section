const image_1 = document.getElementById("picture-1");
const image_2 = document.getElementById("picture-2");
const image_3 = document.getElementById("picture-3");
const image_4 = document.getElementById("picture-4");
const firstAnswer = document.querySelector("#first-answer");
const secondAnswer = document.querySelector("#second-answer");
const thirdAnswer = document.getElementById("third-answer");
const fourthAnswer = document.getElementById("fourth-answer");

// first event call
function firstQuestion() {
  if (firstAnswer.style.display === "block") {
    image_1.src = "assets/images/icon-plus.svg";
    firstAnswer.style.display = "none";
  } else {
    image_1.src = "assets/images/icon-minus.svg";
    firstAnswer.style.display = "block";
  }
  // end first event call
}
// second event call
function secondquestion() {
  if (secondAnswer.style.display === "none") {
    image_2.src = " assets/images/icon-minus.svg";
    secondAnswer.style.display = "block";
  } else {
    image_2.src = "assets/images/icon-plus.svg";
    secondAnswer.style.display = "none";
  }
  // end second event call
}
// third event call
image_3.addEventListener("click", function () {
  if (thirdAnswer.style.display === "none") {
    image_3.src = "assets/images/icon-minus.svg";
    thirdAnswer.style.display = "block";
  } else {
    image_3.src = "assets/images/icon-plus.svg";
    thirdAnswer.style.display = "none";
  }
  // end third event call
});

// fourth event call
function lastquestion() {
  if (fourthAnswer.style.display === "none") {
    fourthAnswer.style.display = "block";
    image_4.src = "assets/images/icon-minus.svg";
  } else {
    fourthAnswer.style.display = "none";
    image_4.src = "assets/images/icon-plus.svg";
  }
}
// end fourth event call
list.addEventListener("click", function (listed) {
  const list = document.querySelector("#listed");

  if (list.sty.display === " block") {
    list.style.display = "none";
  } else [(list.style.display = "block")];
});
