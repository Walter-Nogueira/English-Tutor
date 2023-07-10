const signUp = document.getElementById('menu-sign-up');
const Login = document.getElementById('menu-login');
const modalSignUp = document.getElementById('modal-sign-up');
const btnCloseLogin = document.getElementById('btn-close-login');
const imgModal = document.getElementById('img-modal');
const dynamicContent = document.getElementById('dynamic-container');

function OpenModal(){
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

signUp.addEventListener('click', () => {
    OpenModal();
    if(dynamicContent.childElementCount > 0){
        dynamicContent.innerHTML = '';
        CreateSignUp();
    }
    else{
        CreateSignUp();
    }
});

function CreateTextField(labelContent, type, name, autocomplete, placeholder, required){
    let div = Object.assign(document.createElement('div'), {classList: ['text-field']});

    let label = document.createElement('label');
    label.setAttribute("for", name);
    label.textContent = labelContent;

    let input = document.createElement('input');
    input.id = name;
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("autocomplete", autocomplete);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("required", required);
    
    div.appendChild(label);
    div.appendChild(input);

    return div;
}

function createGoogleButton(value){

    const fragment = document.createDocumentFragment();

    const other = document.createElement('div');
    other.classList.add('other');
  
    const lines = [];
    for (let i = 0; i < 2; i++) {
      const line = document.createElement('div');
      line.classList.add('line');
      lines.push(line);
    }
  
    other.appendChild(lines[0]);
    other.appendChild(document.createElement('p')).textContent = 'Or';
    other.appendChild(lines[1]);
  
    fragment.appendChild(other);
  
    const googleSubmit = document.createElement('div');
    googleSubmit.classList.add('google-submit');
  
    googleSubmit.style.width = '60%';
    googleSubmit.style.height = '40px';
    googleSubmit.style.margin = '20px 0px 75px 0px';
    googleSubmit.style.borderRadius = '5px';
    googleSubmit.style.border = 'none';
    googleSubmit.style.display = 'flex';
    googleSubmit.style.justifyContent = 'center';
    googleSubmit.style.alignItems = 'center';
    googleSubmit.style.fontSize = '0.9em';
    googleSubmit.style.backgroundColor = 'var(--color-gray3)';
    googleSubmit.style.gap = '0em';
  
    const googleSubmitInput = document.createElement('button');
    googleSubmitInput.type = 'submit';
    
    const googleIcon = document.createElement('i');
    googleIcon.classList.add('fa-brands', 'fa-google');
    googleSubmitInput.appendChild(googleIcon);
  
    googleSubmitInput.appendChild(document.createTextNode(value));
  
    googleSubmit.appendChild(googleSubmitInput);
  
    fragment.appendChild(googleSubmit);
  
    return fragment;
}

function CreateSignUp(){
    
    const formContent = document.createDocumentFragment();

    if (imgModal.childElementCount > 0) {
        const imgElement = imgModal.firstElementChild;
        imgElement.src = '../assets/svg_modal/English teacher-amico.svg';
        imgElement.alt = 'English teacher';
    } else {
        const img = document.createElement('img');
        img.src = '../assets/svg_modal/English teacher-amico.svg';
        img.alt = 'English teacher';
        imgModal.appendChild(img);
    }

    const tittle = document.createElement('div');
    tittle.id = 'tittle';
    tittle.classList.add('tittle');
    tittle.appendChild(document.createElement('h1')).textContent = 'Get started';
    tittle.appendChild(document.createElement('p')).textContent = 'Create your account and start learning english today!';
    formContent.appendChild(tittle);

    const textFieldAttributes = [
        {labelContent: "Full name", type: "text", name: "user", autocomplete: "name", placeholder: "Hideo Kojima", required: true},
        {labelContent: "Email", type: "text", name: "email", autocomplete: "email", placeholder: "hkojima_69@example.com", required: true},
        {labelContent: "Password", type: "password", name: "password", autocomplete: "new-password", placeholder: "************", required: true}
    ];

    textFieldAttributes.forEach(obj => {
        formContent.appendChild(CreateTextField(obj.labelContent, obj.type, obj.name, obj.autocomplete, obj.placeholder, obj.required));
    });

    const terms = document.createElement('div');
    terms.classList.add('terms');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'terms-and-cond';
    checkbox.id = 'terms';
    checkbox.value = 'terms-and-cond';
    checkbox.required = true;

    terms.appendChild(checkbox);

    const termsParagraph = document.createElement('p');
    termsParagraph.textContent = 'I accept the ';

    const termsLink = document.createElement('a');
    termsLink.href = '#';
    termsLink.textContent = 'terms and conditions';

    termsParagraph.appendChild(termsLink);
    terms.appendChild(termsParagraph);
    formContent.appendChild(terms);

    const submit = document.createElement('div');
    submit.classList.add('btn-submit');

    const submitInput = document.createElement('input');
    submitInput.type = 'submit';
    submitInput.value = 'Create an account';
    submit.appendChild(submitInput);
    formContent.appendChild(submit);

    const form = document.createElement('form');
    form.classList.add('form-content');
    form.id = 'form-content';
    form.method = 'post';
    form.appendChild(formContent);

    dynamicContent.appendChild(form);
    dynamicContent.appendChild(createGoogleButton('Sign up with Google'));

    const haveAccount = document.createElement('div');
    haveAccount.classList.add('paragraph');

    const p = document.createElement('p');
    p.innerHTML = 'Have an account? <a href="#">Login</a>';

    haveAccount.appendChild(p);
    dynamicContent.appendChild(haveAccount);

}
