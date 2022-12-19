import { UserSection } from "./RegisteredUser";
import { Input } from "../common/Input";
import { Registration } from "./Registration";


export function LogIn() {
    const section = document.createElement('section');
    section.classList.add('login')

    section.innerHTML = `
    <h2>Log In</h2>
    `;


    const sectionDetails = document.createElement('section');
    sectionDetails.classList.add('loginDetails');

    const form = document.createElement('form');
    form.setAttribute("id", "login")

    //Section Login
    const sectionLogin = document.createElement('section');
    sectionLogin.classList.add('sectionLogin');
    const labelLogin = document.createElement('label')
    labelLogin.innerText = "E-mail";
    const loginInput = Input("Login", "Please add your e-mail")
    loginInput.setAttribute("id", "login")
    // loginInput.setAttribute("type", "email");
    sectionLogin.append(labelLogin, loginInput);


    //Section Password
    const sectionPassword = document.createElement('section');
    sectionPassword.classList.add('sectionPassword');
    const labelPassword = document.createElement('label')
    labelPassword.innerText = "Password";
    const passwordInput = Input("Password", "Please add your password")
    passwordInput.setAttribute("id", "login")
    sectionPassword.append(labelPassword, passwordInput);


    // Section SignUp
    const sectionSignin = document.createElement('section');
    sectionSignin.classList.add('sectionSignin');


    sectionSignin.innerHTML = `
    <p>Don't have the account?</p>
    `;

    const logInButton = document.createElement('button')
    logInButton.innerText = "Log In"
    logInButton.setAttribute('type', 'submit');

    const signInButton = document.createElement('button')
    signInButton.innerText = "Sign Up"
    signInButton.classList.add("signInButton")


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Code for registration of the user will be added in next step of the project - node.js
        alert('User log in is not possible / website under reconstruction')

    });

    signInButton.addEventListener('click', (e) => {
        e.preventDefault();

        const navigateEvent = new CustomEvent('navigate', {
            detail: () => Registration()
        });
        document.body.dispatchEvent(navigateEvent);

    })



    form.append(sectionLogin, sectionPassword, logInButton);
    sectionDetails.append(form)
    sectionSignin.append(signInButton);
    section.append(sectionDetails, sectionSignin);


    return section;
}

