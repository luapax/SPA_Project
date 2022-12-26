export function DatesInputs() {
    const section = document.createElement('section');
    section.classList.add('datesInputs');

    const divWrapperDates = document.createElement('section')
    divWrapperDates.classList.add('divWrapperDates')

    const divWrapper1 = document.createElement('div');
    divWrapper1.classList.add('wrapperLabel1');
    const divWrapper2 = document.createElement('div');
    divWrapper2.classList.add('wrapperLabel2');


    const labelArrival = document.createElement('label');
    labelArrival.innerHTML = 'Arrival';

    const labelDeparture = document.createElement('label');
    labelDeparture.innerHTML = 'Departure';

    //Arrival minDate function
    const inputArrivalDate = document.createElement('input');
    inputArrivalDate.classList.add('inputArrival')
    const arrivalDate = new Date();

    const arrivalDay = arrivalDate.getDate() < 10 ? "0" + arrivalDate.getDate() : arrivalDate.getDate();
    const arrivalMonth = arrivalDate.getMonth() + 1 < 10 ? "0" + arrivalDate.getMonth() + 1 : arrivalDate.getMonth() + 1;
    const arrivalYear = arrivalDate.getFullYear();

    inputArrivalDate.setAttribute('type', 'date')
    inputArrivalDate.setAttribute('min', `${arrivalYear}-${arrivalMonth}-${arrivalDay}`)
    inputArrivalDate.setAttribute('required', 'required')




    //Department maxDate function
    const inputDepartureDate = document.createElement('input');
    inputDepartureDate.classList.add('inputDeparture');
    const departureDate = new Date();

    const departureDay = departureDate.getDate() < 10 ? "0" + departureDate.getDate() : departureDate.getDate();
    const departureMonth = departureDate.getMonth() + 1 < 10 ? "0" + departureDate.getMonth() + 1 : departureDate.getMonth() + 1;
    const departureYear = departureDate.getFullYear() + 1;

    inputDepartureDate.setAttribute('type', 'date')
    inputDepartureDate.setAttribute('max', `${departureYear}-${departureMonth}-${departureDay}`)
    inputArrivalDate.setAttribute('max', `${departureYear}-${departureMonth}-${departureDay}`)
    inputDepartureDate.setAttribute('required', 'required')

    inputArrivalDate.addEventListener("change", () => {
        console.log(inputArrivalDate.value)
        inputDepartureDate.setAttribute('min', inputArrivalDate.value)

    })

    divWrapper1.appendChild(labelArrival)
    divWrapper1.appendChild(inputArrivalDate);
    divWrapper2.appendChild(labelDeparture);
    divWrapper2.appendChild(inputDepartureDate);

    divWrapperDates.appendChild(divWrapper1);
    divWrapperDates.appendChild(divWrapper2);
    section.append(divWrapperDates);



    return section;

}