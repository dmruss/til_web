// Simulate fetching sentences from a server
const sentences = ["This is the first sentence.", "Here is another sentence.", "This app is simple and useful."];

function displaySentences() {
    const sentenceList = document.getElementById('sentence-list');
    sentenceList.innerHTML = ''; // Clear the list before re-rendering
    sentences.forEach(sentence => {
        const sentenceElement = document.createElement('p');
        sentenceElement.textContent = sentence;
        sentenceList.appendChild(sentenceElement);
    });
}

function addSentence() {
    const newSentenceInput = document.getElementById('new-sentence');
    const newSentence = newSentenceInput.value.trim();

    if (newSentence) {
        sentences.push(newSentence);
        newSentenceInput.value = '';
        displaySentences();
    } else {
        alert("Please enter a sentence.");
    }
}


(async () => {
    const auth0 = await createAuth0Client(auth0Config);

    // Check if the user is authenticated
    const isAuthenticated = await auth0.isAuthenticated();

    if (!isAuthenticated) {
        // If not authenticated, redirect to the sign-in page
        window.location.href = 'sign-in.html';
    } else {
        // Load sentences if authenticated
        // Initialize app
        document.getElementById('add-sentence-button').addEventListener('click', addSentence);
        displaySentences();
    }
})();



