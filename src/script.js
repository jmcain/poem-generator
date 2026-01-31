function displayPoem(response) {
  console.log("Poem Generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-prompt");
  let apiKey = "22b5fe0t24abf3a8aa4c2830106o5777";

  let context =
    "You are a french love Poem expert and love to write short poems. You should write a 4 line poem and seperate each line with a <br /> following user instructions. Do not include a title. insert <br/> after the poem, and then sign the poem with your ' Written by SheCodes AI' in <strong> element at the bottom.";
  let prompt = `User instructions are: Generate a French Poem about ${instructionInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
