import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';

import { Home } from "./views/Home";
import { Nav } from "./navigation/Nav"

const main = document.querySelector('main');

main.before(Nav());
main.append(Home());

document.body.addEventListener('navigate', (event) => {
    // ROWNOZNACZNE Z: const Component = event.detail;
    const { detail: Component } = event;

    main.innerHTML = '';
    main.append(Component());
});