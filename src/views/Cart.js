
export function Cart() {
    const section = document.createElement('section');

    section.innerHTML = `
    <p>Jestem Cart</p>
    `;
    return section;
}

//wklejka

// import { cartManager } from '../cart/cart-manager';
// import { Button } from '../common/Button';

// export function Cart() {
//     const section = document.createElement('section');

//     section.innerHTML = `
//     <h2>Cart</h2>
//     <p>Oto zawartość Twojego koszyka:</p>
//   `;

//     const table = document.createElement('table');
//     table.classList.add('table');

//     const tableHead = document.createElement('tr');
//     tableHead.innerHTML = `
//     <th>Name</th>
//     <th>Price</th>
//     <th>Quantity</th>
//     <th></th>
//   `;

//     const tableRows = cartManager.getAllItems().map(cartEntry => {
//         const tr = document.createElement('tr');

//         tr.innerHTML = `
//       <td>${cartEntry.item.name}</td>
//       <td>${cartEntry.item.price.toFixed(2)} zł</td>
//       <td>x${cartEntry.quantity}</td>
//       <td></td>
//     `;

//         const removeFromCart = Button('🗑️', () => {
//             cartManager.removeItem(cartEntry.item);

//             const navigateEvent = new CustomEvent('navigate', {
//                 detail: Cart
//             });

//             document.body.dispatchEvent(navigateEvent);
//         });

//         // wstawiamy guzik do usuwania z koszyka do ostatniego elementu-dziecka w/w wiersza (tr)
//         tr.lastElementChild.append(removeFromCart);

//         return tr;
//     });

//     const tableFooter = document.createElement('tr');
//     tableFooter.innerHTML = `
//     <td></td>
//     <td></td>
//     <td>
//       <strong>${cartManager.getTotal().toFixed()} zł</strong>
//     </td>
//     <td></td>
//   `;

//     table.append(tableHead, ...tableRows, tableFooter);
//     section.append(table);

//     return section;
// }
