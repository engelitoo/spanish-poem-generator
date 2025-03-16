function displayPoem(response) {
  // Use TypewriterJs to display the poem
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20, // Typing speed
    cursor: "", // Remove the cursor
  });
}

function generatePoem(event) {
  event.preventDefault();

  // Get the topic from the form input
  let topic = document.querySelector(".instructions").value;
  let apiKey = "ea7o6tce31c14df78ab0e8bc7ea17d99";
  let prompt = `Write a Spanish poem about ${topic}`;
  let context = "Create a short Spanish poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // Clear the poem container
  document.querySelector("#poem").innerHTML = "Generating poem...";

  // Make the API request
  axios
    .get(apiUrl)
    .then(displayPoem)
    .catch((error) => {
      console.error("Error generating poem:", error);
      document.querySelector("#poem").innerHTML =
        "Failed to generate poem. Please try again.";
    });
}

// Add event listener to the form
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
