import { HomeBooking } from "./Home-booking.js"
import { RoomDetails } from "./RoomDetails.js";
import { Button } from "../common/Button.js";
import { Registration } from "./Registration.js";
import { DatesInputs } from "../common/DatesInputs.js";
import { cartManager } from "../cart/cart-manager.js";


export function Booking() {
    const section = document.createElement('section');
    section.classList.add('booking')

    section.innerHTML = `
    <h2>Booking</h2>
    <p>Please add your personal information</p>
    `;

    const sectionDetails = document.createElement('section');
    sectionDetails.classList.add('bookingDetails');

    sectionDetails.innerHTML = `
    <div>
    <label>Name</label>
    <input type="text" placeholder="Name">
    </div>

    <div>
    <label>Surname</label>
    <input type="text" placeholder="Surname">
    </div>

    <div>
    <label>Street</label>
    <input type="text" placeholder="Street">
    </div>


    <div>
    <label>Street Number</label>
    <input type="text" placeholder="Street Number">
    </div>

    <div>
    <label>City</label>
    <input type="text" placeholder="City">
    </div>

    <div>
    <label>Phone Number</label>
    <input type="text" placeholder="Number">
    </div>
    
    `


    const confirmationButton = Button('Confirm Reservation', () => {


        if (input.value === null) {
            console.log('please add all required fields');
        }

        const key = 'IT_SPA_CART';
        const cart = localStorage.getItem(key)

        if (cart === null) {
            console.log('Nie ma nicccccc');
            console.log(cart)
            return;
        }
        else {
            const navigateEvent = new CustomEvent('navigate', {
                detail: () => Registration()
            });

            document.body.dispatchEvent(navigateEvent);
        }
    });




    sectionDetails.append(DatesInputs(), confirmationButton)
    section.append(sectionDetails);

    return section;
}