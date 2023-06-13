const input = document.getElementById("input");
const button = document.getElementById("sendButton");
const output = document.getElementById("output");
const singUp = document.getElementById("link_sign_up");
const sectionLogin = document.getElementById("login");
const html = document.querySelector("body");

singUp.addEventListener("click", () => {
  sectionLogin.style.zIndex = "10000";
  sectionLogin.style.opacity = "1";
  console.log('html', html);
  
  html.style.opacity = "0.4";
});
const messagesStorage = localStorage.getItem("messages")
  ? JSON.parse(localStorage.getItem("messages")) : [];

messagesStorage.forEach((message) => {
  const p = document.createElement("p");
  const div = document.createElement("div");
  div.classList.add("ask");
  p.textContent = message;
  p.style.width = "70%";
  p.style.wordBreak = "break-all";
  p.classList.add("output-text-response");
  div.appendChild(p);
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
});

button.addEventListener("click", () => {
  const value = input.value;
  input.value = "";

  if (!value.trim()) {
    return;
  } else {
    const p = document.createElement("p");
    const div = document.createElement("div");
    div.classList.add("ask");
    p.textContent = value;
    p.style.width = "70%";
    p.style.wordBreak = "break-all";
    p.classList.add("output-text-response");
    div.appendChild(p);
    output.appendChild(div);

    let messagesStorage = localStorage.getItem("messages")
      ? JSON.parse(localStorage.getItem("messages")) : [];
  
    messagesStorage.push(value);

    localStorage.setItem("messages", JSON.stringify(messagesStorage));

    output.scrollTop = output.scrollHeight;
  }
});

input.addEventListener("keydown", (e) => {
  e.key === "Enter" && button.click();
});

// output.addEventListener("click", (e) => {
//   console.log(e);
// });




function logger() {
  console.log("logger");
}


function clearStorage() {
  localStorage.clear();
  window.location.reload();
}