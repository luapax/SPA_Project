import { Booking } from "./Booking";
import { Button } from "../common/Button";
import { DatesInputs } from "../common/DatesInputs";


export function HomeBooking() {
    const section = document.createElement('section');
    section.classList.add('reservation');



    const buttonBook = Button('Book', () => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: () => Booking()
        });

        document.body.dispatchEvent(navigateEvent);
    });


    section.append(DatesInputs());
    section.append(buttonBook);






    return section;
}

