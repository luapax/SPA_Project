import { Button } from "../common/Button";
import { Booking } from "./Booking";
import { UserSection } from "./RegisteredUser";


export function Registration() {
    const section = document.createElement('section');
    section.classList.add('registration')

    const divButton = document.createElement('div');
    divButton.classList.add('divButton');

    section.innerHTML = `
    <h2>Registration</h2>
    <div class="form">
    <div class='label'>
    <label>Login</label>
    <input type="text" placeholder="Your login"></input>
    </div>
    <div class='label'>
    <label>Password</label>
    <input type="text" placeholder="Your password"></input>
    </div>
    </div>
    `;

    const logInButton = Button('Log In', () => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: () => UserSection()
        });

        document.body.dispatchEvent(navigateEvent);
    });

    const signInButton = Button('Sign In', () => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: () => UserSection()
        });

        document.body.dispatchEvent(navigateEvent);
    });



    divButton.append(logInButton, signInButton);
    section.append(divButton);


    return section;
}