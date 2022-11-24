
import { cartManager } from '../cart/cart-manager';
import { Button } from '../common/Button';
import { CartNavSection } from './CartNavSection';


export function CartNav() {
    const cartNavSection = document.querySelector('.cartNavSection')
    console.log(cartNavSection);
    const cartButton = document.querySelector('.cartButton');
    cartButton.addEventListener('mouseenter', () => {
        cartNavSection.style.display = 'flex';
        console.log(cartNavSection);

    })

    cartButton.addEventListener('mouseout', () => {
        cartNavSection.style.display = 'none';
        console.log(cartNavSection);

    })

}