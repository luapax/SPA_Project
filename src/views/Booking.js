import { HomeBooking } from "./Home-booking.js"
import { RoomDetails } from "./RoomDetails.js";
import { Button } from "../common/Button.js";
import { Registration } from "./Registration.js";
import { DatesInputs } from "../common/DatesInputs.js";
import { cartManager } from "../cart/cart-manager.js";
import { Input } from "../common/Input.js";


export function Booking() {
    const section = document.createElement('section');
    section.classList.add('booking')
    const form = document.createElement('form')
    const input1 = Input("Name", "Plase add your name")
    const confirmationButton = document.createElement('button')
    confirmationButton.innerText = "Book"

    // confirmationButton.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (cartManager.isEmpty() === true) {
    //         alert("Your cart is empty!")
    //         return;
    //     }
    //     else {
    //         const navigateEvent = new CustomEvent('navigate', {
    //             detail: () => Registration()
    //         });
    //         document.body.dispatchEvent(navigateEvent);
    //     }
    // })

    form.append(input1, confirmationButton);
    section.prepend(form)
    return section;
}







///STARY KOD - do sprawdzenia

// export function Booking() {
//     const section = document.createElement('section');
//     section.classList.add('booking')

//     section.innerHTML = `
//     <h2>Booking</h2>
//     <p>Please add your personal information</p>
//     `;

//     const sectionDetails = document.createElement('section');
//     sectionDetails.classList.add('bookingDetails');

//     sectionDetails.innerHTML = `
//     <div>
//     <label>Name</label>
//     <input type="text" placeholder="Name" required>
//     </div>

//     <div>
//     <label>Surname</label>
//     <input type="text" placeholder="Surname" required>
//     </div>

//     <div>
//     <label>Street</label>
//     <input type="text" placeholder="Street" required>
//     </div>


//     <div>
//     <label>Street Number</label>
//     <input type="text" placeholder="Street Number" required>
//     </div>

//     <div>
//     <label>City</label>
//     <input type="text" placeholder="City" required>
//     </div>

//     <div>
//     <label>Phone Number</label>
//     <input type="text" placeholder="Number" required>
//     </div>
//     `

//     const input1 = Input("Name", "Plase add your name")



//     const confirmationButton = Button('Confirm Reservation', () => {


//         if (cartManager.isEmpty() === true) {
//             alert("Your cart is empty!")
//             return;
//         }
//         else {
//             const navigateEvent = new CustomEvent('navigate', {
//                 detail: () => Registration()
//             });

//             document.body.dispatchEvent(navigateEvent);
//         }
//     });




//     sectionDetails.append(DatesInputs(), confirmationButton)
//     section.append(sectionDetails);
//     section.prepend(input1)

//     return section;
// }