import { RoomsListItem } from './RoomsListItem';

export function RoomsList() {
    const section = document.createElement('section');

    section.innerHTML = `
    <h2>Rooms List</h2>
    <header>Loading...</header>
  `;

    // uzywam github server
    fetch('https://my-json-server.typicode.com/luapax/jsonServer/rooms')
        .then(response => response.json())
        .then(rooms => {
            const ul = document.createElement('ul');
            const lis = rooms.map(room => RoomsListItem(room));

            ul.append(...lis);
            section.querySelector('header').remove();
            section.append(ul);
        });

    // nie zapomnij o zwroceniu elementu zawierajacego wszystko
    return section;
}
