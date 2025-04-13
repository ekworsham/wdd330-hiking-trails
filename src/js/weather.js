import ExternalServices from "./externalServices.mjs";
import Weather from "./weather.mjs";
import { loadHeaderFooter } from "./utils.mjs"

loadHeaderFooter();

const dataSource = new ExternalServices();
const weatherList = document.querySelector(".park-list");

const weather = new weather(dataSource, weatherList);
weather.init();