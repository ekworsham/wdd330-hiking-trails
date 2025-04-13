import ExternalServices from "./externalServices.mjs";
import Weather from "./weather.mjs";
import { loadHeaderFooter } from "./utils.mjs"

loadHeaderFooter();

const dataSource = new ExternalServices();
const weatherList = document.querySelector(".weather-list");

const weather = new Weather(dataSource, weatherList);
weather.init();