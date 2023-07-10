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

function ApplyStyles(element, style){
    for (let prop in style){
        element.style[prop] = style[prop];
    }
}

function CreateTextField(labelContent, type, name, autocomplete, placeholder, required){
    let div = Object.assign(document.createElement('div'), {classList: ['text-field']});

    const textFieldStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        margin: '10px 0px'
    };

    ApplyStyles(div, textFieldStyle);

    let label = document.createElement('label');
    label.setAttribute("for", name);
    label.textContent = labelContent;

    const labelStyle = {
        fontSize: '0.9em',
        fontWeight: '500',
        color: '#818181'
    };

    ApplyStyles(label, labelStyle);

    let input = document.createElement('input');
    input.id = name;
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("autocomplete", autocomplete);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("required", required);

    const inputStyle = {
        height: '45px',
        width: '100%',
        padding: '10px',
        border: '1px solid var(--color-gray1)',
        borderRadius: '5px',
        outline: 'none'
    };

    ApplyStyles(input, inputStyle);
    
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
  
    const googleSubmitStyles = {
        width: '60%',
        height: '40px',
        margin: '20px 0px 75px 0px',
        borderRadius: '5px',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.9em',
        backgroundColor: 'var(--color-gray3)',
    };

    ApplyStyles(googleSubmit, googleSubmitStyles);
    
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

function CreateTitle(title, subtitle){
    const div = document.createElement('div');
    div.id = 'title';
    div.classList.add('title');

    const h1 = document.createElement('h1');
    h1.textContent = title;

    const p = document.createElement('p');
    p.textContent = subtitle;

    div.appendChild(h1);
    div.appendChild(p)

    const titleStyle = {
        width: '70%',
        height: 'auto',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '0px 0px 0px 30px',
    }

    ApplyStyles(div, titleStyle);

    h1.style.fontSize = '1.7em';
    h1.style.fontWeight = '800';

    p.style.fontSize = '0.9em';
    p.style.color = 'var(--color-gray2)';

    return div;
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

    const title = 'Get started';
    const subtitle = 'Creat your account and start learning english today';
    formContent.appendChild(CreateTitle(title, subtitle));

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

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexGrow: '2'
    };

    ApplyStyles(form, formStyle);

    dynamicContent.appendChild(form);
    dynamicContent.appendChild(createGoogleButton('Sign up with Google'));

    const haveAccount = document.createElement('div');
    haveAccount.classList.add('paragraph');

    const p = document.createElement('p');
    p.innerHTML = 'Have an account? <a href="#">Login</a>';

    haveAccount.appendChild(p);
    dynamicContent.appendChild(haveAccount);

}
