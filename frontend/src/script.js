require("dotenv").config();
const apiKey = process.env.API_KEY;
const button = document.getElementById('send-button');
const input = document.getElementById('user-input');
const output = document.getElementById('output-container');


function HourNow(){
    let date = new Date();
    let hoursNow = date.getHours();
    let minutesNow = date.getMinutes();
    let ampm = hoursNow >= 12 ? 'PM' : 'AM';

    hoursNow = hoursNow % 12;
    hoursNow = hoursNow !== 0 ? hoursNow : 12;

    hoursStr = hoursNow.toString().padStart(2, '0');
    minutesStr = minutesNow.toString().padStart(2, '0');

    return `${hoursStr}:${minutesStr} ${ampm}`;
} 

function UserMessage(){
    let message = input.value;
    input.value = '';

    if(!(message.trim())){
        return;
    } else {
        const messageContainer = document.createElement('div');
        const messageContent = document.createElement('div');
        const paragraph = document.createElement('p');
        let userMessage = document.createTextNode(message);
        const messageInfo = document.createElement('div');
        const timeStamp = document.createElement('span');
        let hourNow = document.createTextNode(HourNow());
    
        timeStamp.appendChild(hourNow);
        messageInfo.appendChild(timeStamp);
        messageContainer.appendChild(messageInfo);

        paragraph.appendChild(userMessage);
        messageContent.appendChild(paragraph);
        messageContainer.appendChild(messageContent);
        
        output.appendChild(messageContainer);

        messageContent.classList.add('message-content');
        messageContainer.classList.add('message-container');
        timeStamp.classList.add('timestamp');
        messageInfo.classList.add('message-info');

        output.scrollTop = output.scrollHeight;

    }
}

function SendQuestion(){
    let question = `A partir de agora, você irá atuar como um professor de inglês, ajudando estudantes a estudar a língua inglesa. Responda apenas perguntas sobre o estudo da língua. Para qualquer outra pergunta, você deve encontrar uma maneira educada e criativa de dizer que não pode respondê-la. As perguntas dos estudantes estarão entre parênteses (${input.value}) e é a elas que você irá responder.`
}

button.addEventListener('click', function() {
    UserMessage();
});

input.addEventListener("keydown", (e) => {
    e.key === "Enter" && button.click();
});