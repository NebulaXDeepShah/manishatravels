// Single-line CMD text
const textToType = "E:/ Manisha Travels Loding...";
const cmdTextElement = document.getElementById("cmd-text");
const loadingScreen = document.getElementById("loading-screen");

let index = 0;
const typingSpeed = 80; // milliseconds per character

// Type text one character at a time
function typeText() {
  if (index < textToType.length) {
    cmdTextElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

// Start typing when the page loads
window.addEventListener("load", () => {
  typeText();

  // Keep the loading screen for 5 seconds before fading out
  setTimeout(() => {
    loadingScreen.style.opacity = "0"; // fade out

    // After fade-out, hide loading screen and show content
    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.querySelector(".content").style.display = "block";
      // Re-enable scrolling if desired
      document.body.style.overflow = "auto";
    }, 800); // match the 0.8s CSS transition
  }, 5000);
});