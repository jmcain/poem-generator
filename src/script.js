function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Je ne vous aime pas, c’est dit, je vous déteste"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  poemElement.innerHTML = " Poem here";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
