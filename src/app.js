import 'regenerator-runtime';
import './styles/style.css';
import './script/component/filmku-nav.js';
import './script/component/filmku-footer.js';
import './script/component/filmku-jum.js';
import {
    main,
    search
} from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", search);
document.addEventListener('DOMContentLoaded', main);
