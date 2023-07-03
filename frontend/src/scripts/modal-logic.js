const signUp = document.getElementById('menu-sign-up');
const modalSignUp = document.getElementById('modal-sign-up');
const btnCloseLogin = document.getElementById('btn-close-login');

signUp.onclick = function OpenModal(){
    modalSignUp.showModal();
    modalSignUp.style.display = 'inline';
  };
    
  function CloseModal(){
    modalSignUp.close();
    modalSignUp.style.display = 'none';
  };
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      CloseModal();
    }
  });
