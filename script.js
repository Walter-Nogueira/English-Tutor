// Acesso aos elementos HTML
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

// Manipulação da entrada do usuário
function handleInput(event) {
  if (event.key === 'Enter') {
    const inputText = inputElement.value;
    if (inputText.trim() !== '') {  // Verificar se a entrada não está vazia
      imprimirStringPorLetra('> ' + inputText); 
      displayOutput('<br>');// Imprimir a entrada letra por letra
    }
    inputElement.value = ''; // Limpar o campo de entrada
    
  }
}

// Exibição da saída no terminal
function displayOutput(text) {
  outputElement.innerHTML += text;
}

// Função para imprimir a string letra por letra
function imprimirStringPorLetra(string) {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < string.length) {
      displayOutput(string.charAt(i)); // Exibir cada letra no terminal
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, 50); // Ajuste o valor do atraso (em milissegundos) aqui
}

// Evento de tecla pressionada
inputElement.addEventListener('keydown', handleInput);
