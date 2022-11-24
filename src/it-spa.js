import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';

import { Home } from "./views/Home";
import { Nav } from "./navigation/Nav"
import { nodeName } from 'jquery';
import { CartNav } from './views/CartNav';

import { CartNavSection } from "./views/CartNavSection"
import { CartNav } from './views/CartNav';


const main = document.querySelector('main');



main.before(Nav());
// main.append(CartNavSection())
main.append(CartNavSection());
main.append(Home());

CartNav();






document.body.addEventListener('navigate', (event) => {
    // ROWNOZNACZNE Z: const Component = event.detail;
    const { detail: Component } = event;

    main.innerHTML = '';
    main.append(Component());


});
