const quoteText = document.querySelector(".quote");
const quoteButton = document.querySelector("button");
const quoteAuthor = document.querySelector(".author .name");
const quoteSound = document.querySelector(".sound");
const copyQuote = document.querySelector(".copy");
const tweetQuote = document.querySelector(".twitter");

const randomQuote = () => {
  quoteButton.classList.add("loading");
  quoteButton.innerText = "Loading Quote..";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      quoteAuthor.innerText = result.author;
      quoteButton.innerText = "New Quote";
      quoteButton.classList.remove("loading");
    });
};

quoteSound.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} By ${quoteAuthor.innerText}`
  );
  speechSynthesis.speak(utterance);
});

copyQuote.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});
tweetQuote.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} By ${quoteAuthor.innerText}`;
  window.open(tweetUrl, "_blank");
});

quoteButton.addEventListener("click", randomQuote);
