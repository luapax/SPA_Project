import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { Cart } from '../views/Cart';
import { Treatments } from '../views/Treatments';
import { Booking } from '../views/Booking';
import { Registration } from '../views/Registration';
import { Footer } from '../views/Footer'


// Nawigacja stworzona na podstawie poniższej tablicy
const navItems = [
    { name: 'Home', component: Home },
    { name: 'Rooms', component: RoomList },
    { name: 'Treatments', component: Treatments },
    { name: 'Booking', component: Booking },
    { name: 'LogIn / SignUp', component: Registration },
    { name: 'Contact', component: Footer },
    { name: '🛒', component: Cart },

];


export function Nav() {
    const nav = document.createElement('nav');
    const navButtons = navItems.map(navItem => {
        const navButton = document.createElement('button');
        navButton.setAttribute('type', 'button');
        navButton.innerText = navItem.name;


        navButton.addEventListener('click', () => {
            const navigateEvent = new CustomEvent('navigate', {
                detail: navItem.component
            });
            document.body.dispatchEvent(navigateEvent);
        });
        return navButton;
    });




    nav.append(...navButtons);
    return nav;
}

