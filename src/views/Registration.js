import { Input } from "../common/Input";
import { LogIn } from "./LogIn";


export function Registration() {
    const section = document.createElement('section');
    section.classList.add('registration')

    section.innerHTML = `
    <h2>Registration</h2>
    `;


    const sectionDetails = document.createElement('section');
    sectionDetails.classList.add('loginDetails');

    const form = document.createElement('form');
    form.setAttribute("id", "registration")

    //Section Login
    const sectionLogin = document.createElement('section');
    sectionLogin.classList.add('sectionLogin');
    const labelLogin = document.createElement('label')
    labelLogin.innerText = "E-mail";
    const loginInput = Input("Login", "Please write your e-mail")
    loginInput.setAttribute("id", "login")
    loginInput.setAttribute("type", "email");
    sectionLogin.append(labelLogin, loginInput);


    //Section password
    const sectionPassword = document.createElement('section');
    sectionPassword.classList.add('sectionPassword2');
    const labelPassword = document.createElement('label')
    labelPassword.innerText = "Password";
    const passwordInput = Input("Password", "Please write your password")
    passwordInput.setAttribute("id", "password")

    sectionPassword.append(labelPassword, passwordInput);


    //Section password
    const sectionPassword2 = document.createElement('section');
    sectionPassword2.classList.add('sectionPassword2');
    const labelPassword2 = document.createElement('label')
    labelPassword2.innerText = "Password";
    const passwordInput2 = Input("Password2", "Please repeat your password")
    passwordInput2.setAttribute("id", "password2")

    sectionPassword2.append(labelPassword2, passwordInput2);


    // Section SignUp
    const sectionSignin = document.createElement('section');
    sectionSignin.classList.add('sectionSignin');


    //Validation
    const validLogin = /^.{4,30}$/;
    const validPassword = /^(?=.*[A-Z])(?=.{8,})/;

    const RegistrationButton = document.createElement('button')
    RegistrationButton.innerText = "Sign Up"
    RegistrationButton.setAttribute('type', 'submit');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!loginInput.value.match(validLogin)) {
            alert('Your login has to have at least 4 characters and maximum 8')
        }


        else if (!passwordInput.value.match(validPassword)) {
            alert("Your password has to have at least 1 capital letter and minumum 8 characters")
        }
        else if ((passwordInput.value !== passwordInput2.value)) {
            alert("Your password doesn't match, please try once again")
        }
        else {
            // Code for registration of the user will be added in next step of the project - node.js
            alert('User registration is not possible / website under reconstruction')
            const navigateEvent = new CustomEvent('navigate', {
                detail: () => LogIn()
            });
            document.body.dispatchEvent(navigateEvent);

        }
    })


    form.append(sectionLogin, sectionPassword, sectionPassword2, RegistrationButton);
    section.append(form);


    return section;
}