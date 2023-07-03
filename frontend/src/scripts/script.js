const button = document.getElementById('send-button');
const input = document.getElementById('user-input');
const output = document.getElementById('output-container');
function HourNow(){
  const date = new Date();
  let hoursNow = date.getHours() % 12 || 12;
  const minutesNow = date.getMinutes();
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  const hoursStr = hoursNow.toString().padStart(2, '0');
  const minutesStr = minutesNow.toString().padStart(2, '0');

  return `${hoursStr}:${minutesStr} ${ampm}`;
};
  
button.addEventListener('click', () => {
  UserMessage();
});

input.addEventListener("keydown", (e) => {
  e.key === "Enter" && button.click();
});

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

/* function SendQuestion(){
  let question = `A partir de agora, você irá atuar como um professor de inglês, ajudando estudantes a estudar a língua inglesa. Responda apenas perguntas sobre o estudo da língua. Para qualquer outra pergunta, você deve encontrar uma maneira educada e criativa de dizer que não pode respondê-la. As perguntas dos estudantes estarão entre parênteses (${input.value}) e é a elas que você irá responder.`

  const openAiApiKey = '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';
  
} */

