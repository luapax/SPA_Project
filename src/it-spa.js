import './it-spa.scss';

import { Home } from "./views/Home";
import { Nav } from "./navigation/Nav"
import { CartNav } from './views/CartNav';
import { CartNavSection } from "./views/CartNavSection"
import { CartNav } from './views/CartNav';

const main = document.querySelector('main');

main.before(Nav());
main.append(CartNavSection());
main.append(Home());
CartNav();

document.body.addEventListener('navigate', (event) => {
    const { detail: Component } = event;

    main.innerHTML = '';
    main.append(Component());
    main.append(CartNavSection())

    CartNav();

});

