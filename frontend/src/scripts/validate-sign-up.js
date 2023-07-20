function ApplyStyles(element, style){
  for (let prop in style){
      element.style[prop] = style[prop];
  }
}

function ValidateName(input, warningElement){
  let inputValue = input.value;
  const regex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

  if(!regex.test(inputValue)){
    warningElement.style.display = 'block';
    input.style.border = '2px solid #F00700';
  }else{
    warningElement.style.display = 'none';
    input.style.border = '1px solid var(--color-gray1)';
  }
}

function ValidateEmail(input, warningElement){
  let inputValue = input.value;
  const regex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;

  if(!regex.test(inputValue)){
    warningElement.style.display = 'block';
    input.style.border = '2px solid #F00700';
  }else{
    warningElement.style.display = 'none';
    input.style.border = '1px solid var(--color-gray1)';
  }
}

function ValidarePassword(input, warningElement){
  let inputValue = input.value;
  /* 
  Minimum 8 characters
  At least one letter
  At least one number */
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  if(!regex.test(inputValue)){
    warningElement.style.display = 'block';
    input.style.border = '2px solid #F00700';
    return false;
  }else{
    warningElement.style.display = 'none';
    input.style.border = '1px solid var(--color-gray1)';
    return true;
  }
}

function Validate(){
  const inputs = document.querySelectorAll('.sign-up-form input');
  const warnings = document.querySelectorAll('.input-warning-sign');

  inputs.forEach(input => {
    input.addEventListener('keydown', (event) => {
      const inputId  = event.target.id;
      
      switch (inputId) {
        case 'user':
          ValidateName(input, warnings[0]);
          break;
        case 'email':
          ValidateEmail(input, warnings[1]);
          break;
        case 'password':
          ValidarePassword(input, warnings[2]);
          break;
        default:
          break;
      }
    });
  });
}

