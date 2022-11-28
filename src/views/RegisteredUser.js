import { Button } from "../common/Button";
import { Booking } from "./Booking";


export function UserSection() {
    const img = 'https://cdn.pixabay.com/photo/2020/01/22/08/19/handshake-4784749_960_720.png'

    const section = document.createElement('section');
    section.classList.add('userSection')

    const div = document.createElement('div');

    div.innerHTML = `
    <h2>Welcome back User</h2>
    <div class="userDetials">
    <img src=${img} width=auto height=200></img>
    </div>
    `;

    const confirmReservation = Button('Confirm Reservation', () => {
        alert('You reservation was accepted');
    });

    div.append(confirmReservation)
    section.append(div);


    return section;
}