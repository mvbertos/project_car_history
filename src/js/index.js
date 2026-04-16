import "../css/meyerReset.css";
import "../css/style.css";
import { getRendererElement } from "./modelDisplay";

const dataTable = (() => {
  const createItem = (name, value) => {
    const itemEl = document.createElement("div");
    itemEl.id = "tableItem";

    const itemNameEl = document.createElement("h3");
    itemNameEl.textContent = name;

    const itemValueEl = document.createElement("p");
    itemValueEl.textContent = value;

    itemEl.append(itemNameEl, itemValueEl);

    return itemEl;
  };
  return { createItem };
})();

const loreIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const contentEl = document.getElementById("content");

const vDisplayEl = document.createElement("div");
vDisplayEl.id = "vDisplay";

const vCanvasDisplayEl = getRendererElement();
vCanvasDisplayEl.id = "canvasDisplay";
vDisplayEl.appendChild(vCanvasDisplayEl);

contentEl.appendChild(vDisplayEl);

const vInfoEl = document.createElement("div");
vInfoEl.id = "vDescription";

const vNameEl = document.createElement("h1");
vNameEl.textContent = "Vehicle Name";

const vDescriptionEl = document.createElement("p");
vDescriptionEl.textContent = loreIpsum;

const vDataEl = document.createElement("div");
vDataEl.id = "dataTable";
vDataEl.append(
  dataTable.createItem("data1", "here is the value"),
  dataTable.createItem("data2", "here is the value"),
  dataTable.createItem("data3", "here is the value"),
  dataTable.createItem("data4", "here is the value"),
  dataTable.createItem("data5", "here is the value"),
);
vInfoEl.append(vNameEl, vDescriptionEl, vDataEl);

contentEl.appendChild(vInfoEl);
