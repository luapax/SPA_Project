import { LogIn } from "./LogIn.js";
import { DatesInputs } from "../common/DatesInputs.js";
import { cartManager } from "../cart/cart-manager.js";
import { Input } from "../common/Input.js";


export function Booking() {
    const section = document.createElement('section');
    section.classList.add('booking')

    section.innerHTML = `
    <h2>Booking</h2>
    <p>Please add your personal information</p>
    `;

    const sectionDetails = document.createElement('section');
    sectionDetails.classList.add('bookingDetails');

    const form = document.createElement('form')

    //Name
    const sectionName = document.createElement('section');
    sectionName.classList.add('sectionInputs');
    const labelName = document.createElement('label')
    labelName.innerText = "Name";
    const inputName = Input("Name", "Plase add your name")
    sectionName.append(labelName, inputName);


    //Surname
    const sectionSurname = document.createElement('section');
    sectionSurname.classList.add('sectionInputs');
    const labelSurname = document.createElement('label')
    labelSurname.innerText = "Surname";
    const inputSurname = Input("Surname", "Plase add your surename")
    sectionSurname.append(labelSurname, inputSurname);


    //Street
    const sectionStreet = document.createElement('section');
    sectionStreet.classList.add('sectionInputs');
    const labelStreet = document.createElement('label')
    labelStreet.innerText = "Street";
    const inputStreet = Input("Street", "Plase add your street")
    sectionStreet.append(labelStreet, inputStreet);


    //StreetNumber
    const sectionStreetNumber = document.createElement('section');
    sectionStreetNumber.classList.add('sectionInputs');
    const labelStreetNumber = document.createElement('label')
    labelStreetNumber.innerText = "Street Number";
    const inputStreetNumber = Input("Street Number", "Plase add your street number")
    sectionStreetNumber.append(labelStreetNumber, inputStreetNumber);


    //City
    const sectionCity = document.createElement('section');
    sectionCity.classList.add('sectionInputs');
    const labelCity = document.createElement('label')
    labelCity.innerText = "City";
    const inputCity = Input("City", "Plase add your city")
    sectionCity.append(labelCity, inputCity);


    //PhoneNumber
    const sectionPhone = document.createElement('section');
    sectionPhone.classList.add('sectionInputs');
    const labelPhone = document.createElement('label')
    labelPhone.innerText = "Phone";
    const inputPhone = Input("Phone", "Plase add your phone number")
    sectionPhone.append(labelPhone, inputPhone);


    const confirmationButton = document.createElement('button')
    confirmationButton.innerText = "Book"
    confirmationButton.setAttribute('type', 'submit');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (cartManager.isEmpty() === true) {
            alert("Your cart is empty!")
            return;
        }
        else {
            const navigateEvent = new CustomEvent('navigate', {
                detail: () => LogIn()
            });
            document.body.dispatchEvent(navigateEvent);
        }
    })

    form.append(sectionName, sectionSurname, sectionStreet, sectionStreetNumber, sectionCity, sectionPhone, DatesInputs(), confirmationButton);
    sectionDetails.append(form)
    section.append(sectionDetails);
    return section;
}
