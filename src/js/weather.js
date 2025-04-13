import ExternalServices from "./externalServices.mjs";
import Weather from "./weather.mjs";
import { loadHeaderFooter } from "./utils.mjs"

loadHeaderFooter();

const dataSource = new ExternalServices();
const weatherElement = document.querySelector(".weather");

const weather = new Weather(dataSource, weatherElement);
weather.init();