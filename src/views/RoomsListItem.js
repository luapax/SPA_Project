import { cartManager } from '../cart/cart-manager';
import { Button } from '../common/Button';
import { RoomDetails } from './RoomDetails';

//creation of a single room
export function RoomsListItem(room) {

  const li = document.createElement('li');


  const readMoreButton = Button('Read More', () => {
    const navigateEvent = new CustomEvent('navigate', {
      detail: () => RoomDetails(room.id)
    });

    document.body.dispatchEvent(navigateEvent);
  });

  const addToCartButton = Button('Add To Cart', () => {
    cartManager.addItem(room);
  });


  li.innerHTML = `
      <img src=${room.img} width=auto height=150></img>
      <h6>Room</h6>
      <h5>${room.name}</h5>
      <p>
        <strong>${room.price.toFixed(2)} zł</strong>
      </p>
      <footer></footer>
    `;

  li.querySelector('footer').append(readMoreButton, addToCartButton);

  return li;
}
