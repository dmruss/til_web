// app.js

// Sample sentences array
const sampleSentences = [
  {
    text: "JavaScript allows for both functional and object-oriented programming.",
    keywords: ["JavaScript", "Programming", "Functional"],
    datetime: "2023-09-01 10:00 AM",
  },
  {
    text: "The sun is 93 million miles away from Earth.",
    keywords: ["Astronomy", "Sun", "Science"],
    datetime: "2023-09-02 11:30 AM",
  },
  {
    text: "Honey never spoils, and archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old.",
    keywords: ["Honey", "Egypt", "History"],
    datetime: "2023-09-03 02:15 PM",
  },
];

// User's sentences array
let userSentences = [];

function displaySampleSentences() {
  const sampleList = document.getElementById("sample-sentences");
  sampleList.innerHTML = "";

  sampleSentences.forEach((sentence) => {
    const li = document.createElement("li");
    li.classList.add("sentence-card");
    li.innerHTML = `
      <div class="sentence-datetime">${sentence.datetime}</div>
      <div class="sentence-text">${sentence.text}</div>
      <div class="sentence-keywords">Keywords: ${sentence.keywords.join(", ")}</div>
    `;
    sampleList.appendChild(li);
  });
}

function displayUserSentences() {
  const userSentencesList = document.getElementById("user-sentences");
  userSentencesList.innerHTML = "";

  userSentences.forEach((sentence) => {
    const li = document.createElement("li");
    li.classList.add("sentence-card");
    li.innerHTML = `
      <div class="sentence-datetime">${sentence.datetime}</div>
      <div class="sentence-text">${sentence.text}</div>
      <div class="sentence-keywords">Keywords: ${sentence.keywords.join(", ")}</div>
    `;
    userSentencesList.appendChild(li);
  });
}

// Add a new sentence from user input
function addSentence() {
  const sentenceInput = document.getElementById("sentence");
  const keywordsInput = document.getElementById("keywords");

  if (sentenceInput.value.trim() === "") {
    alert("Please enter a sentence.");
    return;
  }

  const newSentence = {
    text: sentenceInput.value,
    keywords: keywordsInput.value.split(",").map((kw) => kw.trim()),
    datetime: new Date().toLocaleString(),
  };

  userSentences.push(newSentence);
  displayUserSentences();

  sentenceInput.value = "";
  keywordsInput.value = "";
}

// Initialize the app by displaying sample sentences
window.onload = function () {
  displaySampleSentences();
  displayUserSentences();
};
