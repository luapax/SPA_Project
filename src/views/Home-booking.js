import { Registration } from "./Registration";
import { Button } from "../common/Button";


export function HomeBooking() {
    const section = document.createElement('section');
    section.classList.add('reservation');

    const form = document.createElement('form')

    const divWrapper1 = document.createElement('div');
    divWrapper1.classList.add('wrapperLabel1');
    const divWrapper2 = document.createElement('div');
    divWrapper2.classList.add('wrapperLabel2');

    const button = document.createElement('button');
    button.innerHTML = "Book";

    const buttonBook = Button('Book', () => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: () => Registration()
        });

        document.body.dispatchEvent(navigateEvent);
    });



    const labelArrival = document.createElement('label');
    labelArrival.innerHTML = 'Arrival';

    const labelDeparture = document.createElement('label');
    labelDeparture.innerHTML = 'Department';

    //Arrival minDate function
    const inputArrivalDate = document.createElement('input');
    const arrivalDate = new Date();

    const arrivalDay = arrivalDate.getDate() < 10 ? "0" + arrivalDate.getDate() : arrivalDate.getDate();
    const arrivalMonth = arrivalDate.getMonth() + 1 < 10 ? "0" + arrivalDate.getMonth() + 1 : arrivalDate.getMonth() + 1;
    const arrivalYear = arrivalDate.getFullYear();

    inputArrivalDate.setAttribute('type', 'date')
    inputArrivalDate.setAttribute('min', `${arrivalYear}-${arrivalMonth}-${arrivalDay}`)


    //Department maxDate function
    const inputDepartureDate = document.createElement('input');
    const departureDate = new Date();

    const departureDay = departureDate.getDate() < 10 ? "0" + departureDate.getDate() : departureDate.getDate();
    const departureMonth = departureDate.getMonth() + 1 < 10 ? "0" + departureDate.getMonth() + 1 : departureDate.getMonth() + 1;
    const departureYear = departureDate.getFullYear() + 1;

    inputDepartureDate.setAttribute('type', 'date')
    inputDepartureDate.setAttribute('max', `${departureYear}-${departureMonth}-${departureDay}`)



    form.appendChild(divWrapper1);
    form.appendChild(divWrapper2);
    form.appendChild(buttonBook);
    form.appendChild(labelArrival)
    form.appendChild(inputArrivalDate);
    form.appendChild(labelDeparture);
    form.appendChild(inputDepartureDate);
    section.appendChild(form);

    divWrapper1.appendChild(labelArrival)
    divWrapper1.appendChild(inputArrivalDate);
    divWrapper2.appendChild(labelDeparture);
    divWrapper2.appendChild(inputDepartureDate);



    return section;
}

