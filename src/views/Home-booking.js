

export function HomeBooking() {

    const section = document.querySelector('section');
    section.classList.add('datesHome');

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


    section.appendChild(labelArrival);
    section.appendChild(inputArrivalDate);
    section.appendChild(labelDeparture);
    section.appendChild(inputDepartureDate);
    return section;
}

