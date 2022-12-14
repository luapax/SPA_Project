import { Home } from '../views/Home';
import { RoomsList } from '../views/RoomsList';
import { Cart } from '../views/Cart';
import { Treatments } from '../views/Treatments';
import { Booking } from '../views/Booking';
import { LogIn } from '../views/LogIn';


// Navigation made based on below []
const navItems = [
    { name: 'HOME', component: Home },
    { name: 'ROOMS', component: RoomsList },
    { name: 'TREATMENTS', component: Treatments },
    { name: 'BOOKING', component: Booking },
    { name: 'LOG IN', component: LogIn },
    { name: 'YOUR CART 🛒', component: Cart },

];


export function Nav() {
    const nav = document.createElement('nav');
    const navButtons = navItems.map(navItem => {

        const div = document.createElement('div');
        const navButton = document.createElement('button');
        navButton.setAttribute('type', 'button');
        // navButton.innerText = navItem.name;
        div.innerText = navItem.name;


        navButton.appendChild(div);


        navButton.addEventListener('click', () => {
            const navigateEvent = new CustomEvent('navigate', {
                detail: navItem.component
            });
            document.body.dispatchEvent(navigateEvent);
        });
        return navButton;
    });

    navButtons[navButtons.length - 1].classList.add('cartButton');
    nav.append(...navButtons);

    return nav;
}

