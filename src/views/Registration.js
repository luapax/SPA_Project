import { Button } from "../common/Button";
import { Booking } from "./Booking";
import { UserSection } from "./RegisteredUser";
import { Input } from "../common/Input";


export function Registration() {
    const section = document.createElement('section');
    section.classList.add('registration')

    section.innerHTML = `
    <h2>Registration</h2>
    `;

    const form = document.createElement('form');
    form.setAttribute("id", "regestration")
    const loginInput = Input("Login", "Please add your login")
    loginInput.setAttribute("id", "regestration")
    // loginInput.classList.add('loginInput')
    const passwordInput = Input("Password", "Please add your password")
    passwordInput.setAttribute("id", "regestration")

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


    const signInButton = Button('Sign In', () => {

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
        }
        // document.body.dispatchEvent(navigateEvent);


    });

    // divButton.append(logInButton, signInButton);


    form.append(loginInput, passwordInput, signInButton);
    section.append(form);


    return section;
}





//STARY KOD


// import { Button } from "../common/Button";
// import { Booking } from "./Booking";
// import { UserSection } from "./RegisteredUser";


// export function Registration() {
//     const section = document.createElement('section');
//     section.classList.add('registration')

//     const divButton = document.createElement('div');
//     divButton.classList.add('divButton');

//     section.innerHTML = `
//     <h2>Registration</h2>
//     <div class="form">
//     <div class='label'>
//     <label>Login</label>
//     <input type="text" placeholder="Your login"></input>
//     </div>
//     <div class='label'>
//     <label>Password</label>
//     <input type="text" placeholder="Your password"></input>
//     </div>
//     </div>
//     `;

//     const logInButton = Button('Log In', () => {
//         const navigateEvent = new CustomEvent('navigate', {
//             detail: () => UserSection()
//         });

//         document.body.dispatchEvent(navigateEvent);
//     });

//     const signInButton = Button('Sign In', () => {
//         const navigateEvent = new CustomEvent('navigate', {
//             detail: () => UserSection()
//         });

//         document.body.dispatchEvent(navigateEvent);
//     });

//     divButton.append(logInButton, signInButton);
//     section.append(divButton);


//     return section;
// }