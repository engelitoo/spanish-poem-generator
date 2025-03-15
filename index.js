function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.asnwer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let apiKey = "ea7o6tce31c14df78ab0e8bc7ea17d99";
  let prompt = "Write a spanish poem";
  let context = "Create a short spanish poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
