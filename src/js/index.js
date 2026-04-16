import { div } from "three/tsl";
import "../css/meyerReset.css";
import "../css/style.css";
import { getRendererElement } from "./modelDisplay";

class CarData {
  constructor(name = "", description = "", details = {}) {
    this.name = name;
    this.description = description;
    this.details = details;
  }
}
const fairladyZ89 = new CarData(
  "Fairlady Z 300ZX 98'",
  "Since the launch of the first-generation S30 (1969), the Fairlady Z became an exceptional hit as a sports car with a production total in excess of 1 million units. Special features of the fourth-generation model (Z32), launched in July 1989, included its spirited silhouette - wide proportions, slanted nose, and forward cabin. Both two-seater and 2/2 series were produced. ",
  [
    {
      field: "Overall (length / width / height)",
      value: "4,525/1,800/1,255mm",
    },
    {
      field: "Wheelbase",
      value: "2,570mm",
    },
    { field: "Tread (front/rear)", value: "1,495/1,535mm" },
    {
      field: "Curb weight",
      value: "1,570kg",
    },
    {
      field: "Engine",
      value: "VG30DET (V6, DOHC), 2,960cc",
    },
    {
      field: "Engine Max. power",
      value: "206W (280PS)/6,400rpm",
    },
    {
      field: "Engine Max. torque",
      value: "388Nm (39.6kgm)/3,600rpm",
    },
    {
      field: "Transmission",
      value: "Electronically controlled AT (E-AT)",
    },
    {
      field: "Suspension",
      value: "Multilink (front & rear) ",
    },
    {
      field: "Brakes",
      value: "Ventilated disc (front & rear)",
    },
    {
      field: "Tires",
      value: "225/50R16 (front & rear) ",
    },
  ],
);

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

const contentEl = document.getElementById("content");

//Displaying Vehicle Model
const vDisplayEl = document.createElement("div");
vDisplayEl.id = "vDisplay";

const vCanvasDisplayEl = getRendererElement();
vDisplayEl.appendChild(vCanvasDisplayEl);

contentEl.appendChild(vDisplayEl);

//Informations of the current vehicle
const vInfoEl = document.createElement("div");
vInfoEl.id = "vInfo";

const vNameEl = document.createElement("h1");
vNameEl.textContent = fairladyZ89.name;

const vDescriptionEl = document.createElement("p");
vDescriptionEl.textContent = fairladyZ89.description;

const vDataEl = document.createElement("div");
vDataEl.id = "dataTable";
vDataEl.append(
  ...fairladyZ89.details.map((v) => {
    return dataTable.createItem(v.field, v.value);
  }),
);

vInfoEl.append(vNameEl, vDescriptionEl, vDataEl);

//Just simple visual division between elements
// const divisionElement = document.createElement("div");
// divisionElement.id = "division";
// contentEl.appendChild(divisionElement);

contentEl.appendChild(vInfoEl);
