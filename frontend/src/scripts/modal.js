const signUp = document.getElementById('menu-sign-up');
const modal = document.getElementById('modal');
const btnCloseLogin = document.getElementById('btn-close-login');
const imgModal = document.getElementById('img-modal');
const dynamicContent = document.getElementById('dynamic-container');

function OpenModal(){
    modal.showModal();
    modal.style.display = 'inline';
};

function CloseModal(){
    modal.close();
    modal.style.display = 'none';
    dynamicContent.innerHTML = '';
    imgModal.innerHTML = '';
};

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      CloseModal();
    }
});

signUp.addEventListener('click', () => {
    OpenModal();
    CreateSignUp();
});

function ApplyStyles(element, style){
    for (let prop in style){
        element.style[prop] = style[prop];
    }
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

function CreateSubmitButton(value){
    const submit = document.createElement('div');
    submit.classList.add('btn-submit');
    submit.style.width = '60%';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = value;
    submit.appendChild(submitBtn);
    
    return submit;
}

function Divider(){
    const divider = document.createElement('div');
    divider.classList.add('divider');
    
    const dividerStyle = {
        width: '100%', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.9em',
        color: 'var(--color-gray2)',
        gap: '10px'
    }

    ApplyStyles(divider, dividerStyle);

    const dividerLines = [];
    for(let i = 0; i < 2; i++){
        let line = document.createElement('hr');
        line.classList.add('divider-line');
        dividerLines.push(line);

        const lineStely = {
            width: '26%',
            height: '1px',
            border: 'none',
            backgroundColor: 'var(--color-gray3)'
        };
        
        ApplyStyles(line, lineStely);
    }

    const span = document.createElement('span');
    span.classList.add('divider-text');
    span.textContent = 'Or';

    divider.appendChild(dividerLines[0]);
    divider.appendChild(span);
    divider.appendChild(dividerLines[1]);
    
    return divider;
}

function createGoogleButton(value){
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
  
    return googleSubmit;
}

function CreateSignUp(){
    const img = document.createElement('img');
    img.src = '../assets/svg_modal/English teacher-amico.svg';
    img.alt = 'English teacher';
    imgModal.appendChild(img);
   
    const fragment = document.createDocumentFragment();

    let title = 'Get started';
    let subtitle = 'Create your account and start learning english today';
    const titleContent = CreateTitle(title,subtitle);

    fragment.appendChild(titleContent);

    const form = document.createElement('form');
    form.classList.add('form-content');
    form.id = 'form-content';
    form.method = 'post';

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '20px 0px'
    };

    ApplyStyles(form, formStyle);

    const textFieldAttributes = [
        {labelContent: "Full name", type: "text", name: "user", autocomplete: "name", placeholder: "Hideo Kojima", required: true},
        {labelContent: "Email", type: "text", name: "email", autocomplete: "email", placeholder: "hkojima_69@example.com", required: true},
        {labelContent: "Password", type: "password", name: "password", autocomplete: "new-password", placeholder: "************", required: true}
    ];

    textFieldAttributes.forEach(obj => {
        form.appendChild(CreateTextField(obj.labelContent, obj.type, obj.name, obj.autocomplete, obj.placeholder, obj.required));
    })

    fragment.appendChild(form);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'terms-and-cond';
    checkbox.id = 'terms';
    checkbox.value = 'terms-and-cond';
    checkbox.required = true;

    const  termsContainer= document.createElement('div');
    termsContainer.classList.add('terms-container');

    termsContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px 0px -15px 0px',
        width: '100%',
        gap: '5px',
        fontSize: '0.8em'
    }

    ApplyStyles(termsContainer, termsContainerStyle);

    termsContainer.appendChild(checkbox);

    let paragraphTerms = '<p>I accept the <a href="#">terms of use</a>.</p>';
    termsContainer.insertAdjacentHTML('beforeend', paragraphTerms);
    const p = termsContainer.querySelector('p');
    const a = p.querySelector('a');
    a.style.color = 'var(--color-mediumTealBlue)';
    form.appendChild(termsContainer);

    const HaveAccount = document.createElement('div');
    HaveAccount.classList.add('paragraph')
    HaveAccount.innerHTML = '<p>Have an account? <a href="#">Login</a></p>';
    
    fragment.appendChild(CreateSubmitButton('Create an account'))
    fragment.appendChild(Divider());
    fragment.appendChild(createGoogleButton('Sign up with Google'))
    fragment.appendChild(HaveAccount);

    dynamicContent.appendChild(fragment);
}

const login = document.getElementById('menu-login');

login.addEventListener('click', () =>{
    OpenModal();
    CreateLogin();
})

function CreateLogin(){

    const img = document.createElement('img');
    img.src = "../assets/svg_modal/disabled student-amico.svg";
    img.alt = 'Studying';
    imgModal.appendChild(img);
    
    const fragment = document.createDocumentFragment();

    const title = 'English learnig hub';
    const subtitle = 'Login to embrace a new level of fluency';
    let divTitle = CreateTitle(title, subtitle)
    divTitle.style.margin = '20px 0px 10px 30px';
    
    fragment.appendChild(divTitle);

    const textFieldAttributes = [
        {labelContent: "Email", type: "email", name: "email", autocomplete: "email", placeholder: "hkojima_69@example.com", required: true},
        {labelContent: "Password", type: 'password', name: 'password', autocomplete: 'password', placeholder: '***********', required: true}
    ];

    const form = document.createElement('form');
    form.classList.add('form-content');
    form.id = 'form-content';
    form.method = 'post';

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '20px 0px'
    };

    ApplyStyles(form, formStyle);

    textFieldAttributes.forEach(obj => {
        form.appendChild(CreateTextField(obj.labelContent, obj.type, obj.name, obj.autocomplete, obj.placeholder, obj.required));
    });

    fragment.appendChild(form);

    function RememberMe(){
        const rememberMeCheckbox = document.createElement('div');
        rememberMeCheckbox.classList.add('remember-me-checkbox');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'remember-me';
        checkbox.id = 'remember-me';
        checkbox.value = 'remember-me';
        checkbox.required = false;

        rememberMeCheckbox.appendChild(checkbox);

        let Paragraph = '<p>Remember me</p>';
        rememberMeCheckbox.insertAdjacentHTML('beforeend', Paragraph);

        return rememberMeCheckbox;
    }
    
    function ForgotPassword(){
        const forgotPasswordLink = document.createElement('div');
        forgotPasswordLink.classList.add('forgot-password-link');

        forgotPasswordLink.innerHTML= '<a href="#">Forgot password?</a>';

        return forgotPasswordLink
    }


    const optionContainer = document.createElement('div');
    optionContainer.classList.add('option-container');
    optionContainer.appendChild(RememberMe());
    optionContainer.appendChild(ForgotPassword());
    form.appendChild(optionContainer);
    
    fragment.appendChild(CreateSubmitButton('Login'));
    fragment.appendChild(Divider());
    fragment.appendChild(createGoogleButton('Login with Google'))

    let createAccount = document.createElement('div');
    createAccount.classList.add('paragraph');
    createAccount.innerHTML = '<p>Don`t have an account? <a href="#">Sign up</a></p>';

    fragment.appendChild(createAccount);

    dynamicContent.appendChild(fragment);
}

