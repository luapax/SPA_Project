
import { cartManager } from '../cart/cart-manager';
import { Button } from '../common/Button';
import { CartNavSection } from './CartNavSection';


export function CartNav() {
    const cartNavSection = document.querySelector('.cartNavSection')
    const cartButton = document.querySelector('.cartButton');
    cartButton.addEventListener('mouseenter', () => {
        cartNavSection.style.backgroundColor = 'flex';

    })

    cartButton.addEventListener('mouseleave', () => {
        cartNavSection.style.display = 'none';

    })

}