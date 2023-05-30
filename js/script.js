const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
    }
});

function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/r u/g, "are you");

    if (compare(utterances, answers, text)) {
        // Search for exact match in triggers
        product = compare(utterances, answers, text);
    }
    else {
        product = alternatives[Math.floor(Math.random() * alternatives.length)];
    }

    addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < utterancesArray.length; x++) {
        for (let y = 0; y < utterancesArray[x].length; y++) {
            if (utterancesArray[x][y] === string) {
                let replies = answersArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                break;
            }
        }
        if (replyFound) {
            break;
        }
    }
    return reply;
}

function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);

    messagesContainer.scrollTop =
        messagesContainer.scrollHeight - messagesContainer.clientHeight;

    setTimeout(() => {
        botText.innerText = `${product}`;
    }, 2000);
}

const utterances = [

    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up", "what's up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
        "your name please",
        "your name",
        "may i know your name",
        "what is your name",
        "what call yourself"
    ],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today", "what should i eat today", "what should i eat now", "what should i eat tomorrow"],
    ["what should i do", "what should i do today", "what should i do now", "what should i do tomorrow"],
    ["what is your hobby", "do you have any hobby"],
    ["what do you want to do"],
    ["what should you do"],
    ["what can you do"],
    ["What are you waiting for?"],
    ["what", "why", "but why", "how", "where", "when"],
    ["no", "not sure", "maybe", "no thanks"],
    [""],
    ["haha", "ha", "lol", "hehe"]
];

// Possible responses corresponding to triggers

const answers = [
    [
        "Hello!", "Hi!", "Hey!", "Hi there!", "Hello Stranger!"
    ],
    [
        "Fine... how are you?",
        "Good... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Alicja Orlik"],
    ["I don't have a name", "I am nameless", "Nobody gave me a name ;("],
    ["Glad to hear it", "Nice to hear it", "That's fine", "That's great"],
    ["Why?", "Not too fast?", "Already?", "Why? You shouldn't!"],
    ["What about?", "I don't know if I can help", "I don't think I'll be much help"],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Pizza", "Salad", "Chocolate", "Some fruits"],
    ["Go for a walk!", "Go shopping", "Cook something", "Call a friend"],
    ["Answering your questions", "Talking with you", "Chatting with you"],
    ["Hmmm. Let me think about it!", "I don't know, what I could do", "Maybe chatting"],
    ["Hmmm. Let me think about it!", "I don't know, what I should do", "Maybe chatting?"],
    ["Answer your questions", "Ask you questions", "Chat with you"],
    ["For nothing", "I don't know", "For your next question"],
    ["Great question!", "Ask somebody else!", "Don't ask me"],
    ["That's ok", "What do you thinking about?", "What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!", "Hehe!", "Lol", "Ha", "He"]
];

// Random for any other user input

const alternatives = [
    "Go on...",
    "Try again",
    "Sorry! I don't understand",
    "What do you mean?",
    "You can ask me something else",
    "Ask me for example, who created me",
    "Ask me about my hobby",
];