import { HomeBooking } from "./Home-booking.js"
import { RoomDetails } from "./RoomDetails.js";
import { Button } from "../common/Button.js";
import { Registration } from "./Registration.js";
import { DatesInputs } from "../common/DatesInputs.js";


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
        const navigateEvent = new CustomEvent('navigate', {
            detail: () => Registration()
        });

        document.body.dispatchEvent(navigateEvent);
    });




    sectionDetails.append(DatesInputs(), confirmationButton)
    section.append(sectionDetails);

    return section;
}