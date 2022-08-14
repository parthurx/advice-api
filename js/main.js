const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#advice-text");
const btn = document.querySelector("#btn");

function getAdv() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceNum = adviceData.slip.id;
      const advice = adviceData.slip.advice;

      adviceId.innerText = adviceNum;
      adviceText.innerHTML = `<p>${advice} </p>`;
    })
    .catch((error) => {
      console.log(error);
    })
}

btn.addEventListener("click", function(){
    getAdv()
})


