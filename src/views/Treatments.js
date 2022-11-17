import { TreatmentsItem } from "./TreatmentsItem";

export function Treatments() {
    const section = document.createElement('section');
    section.classList.add("treatments");

    section.innerHTML = `
    <h2>Treatments List</h2>
    <header>Loading...</header>
  `;

    // uzywam github server
    fetch('https://my-json-server.typicode.com/luapax/jsonServer/treatments')
        .then(response => response.json())
        .then(treatments => {
            const ul = document.createElement('ul');
            const lis = treatments.map(treatment => TreatmentsItem(treatment));

            ul.append(...lis);
            section.querySelector('header').remove();
            section.append(ul);
        });

    return section;
}
