import layout from './components/layout';
import PolishNotation from './components/PolishNotation';

(function () {
    const appContainer = document.createElement('div');
    const npi = new PolishNotation;

    appContainer.setAttribute("class", "app");

    document.body.innerHTML += layout();

    npi.attachEvents();
})()