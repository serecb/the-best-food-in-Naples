function VoteNow() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let answer = prompt("Have you ever visited Naples?");
  answer = answer.toLowerCase();
  answer = answer.trim();
  answer = answer.replace("yep", "yes");
  let clickButton = document.querySelector("Button");
  if (answer === "yes") {
    alert(`Bravo ${name}, Napoli 💘 YOU!`);
  } else {
    alert(`Hi ${name}, hurry up! Napoli is waiting for you 😉!`);
  }
}
let clickButton = document.querySelector("Button");
clickButton.addEventListener("click", VoteNow);
