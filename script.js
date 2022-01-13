const displayAnswer = document.querySelectorAll("#btn");
const answer = document.querySelectorAll(".answer");
const imgArrow = document.querySelectorAll(".img");
const boldText = document.querySelectorAll(".question-asked");

let x;
function openClose(place) {
  if (x == 1) {
    answer[place].classList.add("answer");
    imgArrow[place].classList.remove("imgArrow");
    boldText[place].classList.remove("boldText");
    return (x = 0);
  } else {
    answer[place].classList.remove("answer");
    imgArrow[place].classList.add("imgArrow");
    boldText[place].classList.add("boldText");
    return (x = 1);
  }
}

for (let i = 0; i < displayAnswer.length; i++) {
  displayAnswer[i].addEventListener("click", function () {
    openClose(i);
  });
}