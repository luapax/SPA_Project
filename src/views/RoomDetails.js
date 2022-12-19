import { Button } from "../common/Button";
import { RoomsList } from "./RoomsList";

export function RoomDetails(id) {

  const section = document.createElement('section');
  section.classList.add('roomDetails');

  section.innerHTML = `
      <header>Loading...</header>
    `;

  fetch(`https://my-json-server.typicode.com/luapax/jsonServer/rooms/${id}`)
    .then(response => response.json())
    .then(room => {

      const backButton = Button('Back to Room List', () => {
        const navigateEvent = new CustomEvent('navigate', {
          detail: () => RoomsList()
        });

        document.body.dispatchEvent(navigateEvent);
      });

      const paragraph = document.createElement('p');

      paragraph.innerHTML = `
          <img src=${room.img} width=auto height=150></img>
          <div>
          <strong>Nazwa:</strong> ${room.name}
          <br/>
          <strong>Beds:</strong> ${room.beds}x🛏️
          <br/>
          <strong>Guests:</strong> ${room.guests}x👤
          <br/>
          <strong>Description:</strong> ${room.description}
          <br/>
          <strong>Price:</strong> ${room.price.toFixed(2)} zł
          </div>
        `;


      section.querySelector('header').remove();
      section.append(paragraph);
      section.append(backButton);
    });

  return section;
}
