import { Button } from "../common/Button";
import { Booking } from "./Booking";
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


    //Section password
    const sectionPassword = document.createElement('section');
    sectionPassword.classList.add('sectionPassword');
    const labelPassword = document.createElement('label')
    labelPassword.innerText = "Password";
    const passwordInput = Input("Password", "Please add your password")
    passwordInput.setAttribute("id", "login")
    sectionPassword.append(labelPassword, passwordInput);


    // Section SignIn
    const sectionSignin = document.createElement('section');
    sectionSignin.classList.add('sectionSignin');


    sectionSignin.innerHTML = `
    <p>Don't have the account?</p>
    `;



    // const passwordInput = Input("Password", "Please add your password")
    // passwordInput.setAttribute("id", "login")

    // passwordInput.classList.add('passwordInput')

    const validLogin = /^.{4,10}$/;
    const validPassword = /^(?=.*[A-Z])(?=.{8,})/;

    const ob = {
        name: "Piotrek",
        age: 10,
        pet: {
            type: "ultra dog",
            speed: 1000,
            power: 9001
        }
    }



    const logInButton = document.createElement('button')
    logInButton.innerText = "Log In"
    logInButton.setAttribute('type', 'submit');

    const signInButton = document.createElement('button')
    signInButton.innerText = "Sign In"
    signInButton.classList.add("signInButton")



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!loginInput.value.match(validLogin)) {

            // if ((loginInput.value.length == 0){
            alert('Your login has to have at least 4 characters')
        }

        else if (!passwordInput.value.match(validPassword)) {
            alert("Your password has to have at least 1 capital letter and minumum 8 characters")
        }
        else {
            // uzywam github server
            fetch('https://my-json-server.typicode.com/luapax/jsonServer/users', {
                method: "post",
                body: JSON.stringify({
                    // login: loginInput.value, password: passwordInput.value
                    login: ob,
                })
            })
                .then(response => response.json())
                .then(data => console.log(data));
            alert('user added!')

            const navigateEvent = new CustomEvent('navigate', {
                detail: () => UserSection()
            });
            document.body.dispatchEvent(navigateEvent);



        }


    })


    // document.body.dispatchEvent(navigateEvent);




    // divButton.append(logInButton, signInButton);


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

