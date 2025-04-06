import ExternalServices from "./externalServices.mjs";
import Parks from "./parks.mjs";
import { loadHeaderFooter } from "./utils.mjs"

loadHeaderFooter();

const dataSource = new ExternalServices();
const parkList = document.querySelector(".park-list");

const parks = new Parks(dataSource, parkList);
parks.init();
