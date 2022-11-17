import { cartManager } from '../cart/cart-manager';
import { Button } from '../common/Button';

//tworzenie pojedynczego elementu zabiegu
export function TreatmentsItem(treatment) {

    const li = document.createElement('li');

    const addToCartButton = Button('Add To Cart', () => {
        cartManager.addItem(treatment);
    });


    li.innerHTML = `
      <img src=${treatment.img} width=auto height=150></img>
      <h5>${treatment.name}</h5>
      <h6>Area: ${treatment.area}</h6>
      <h6>Time: ${treatment.time}</h6>
      <p>
        <strong>${treatment.price.toFixed(2)} zł</strong>
      </p>
      <footer></footer>
    `;

    li.querySelector('footer').append(addToCartButton);

    return li;
}
