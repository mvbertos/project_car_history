import { div } from "three/tsl";
import "../css/meyerReset.css";
import "../css/style.css";
import {
  getRendererElement,
  resizeRendererView,
  setRendererParent,
} from "./modelDisplay";

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
      field: "(length / width / height)",
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
// const vCanvasDisplayEl = getRendererElement();
// vDisplayEl.appendChild(vCanvasDisplayEl);
setRendererParent(vDisplayEl);
contentEl.appendChild(vDisplayEl);
// resizeRendererView();

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
contentEl.appendChild(vInfoEl);

//Credits
const creditEl = document.createElement("div");
creditEl.id = "credits";

//Model
const modelAuthorDivEl = document.createElement("div");
const modelAuthorEl = document.createElement("p");
modelAuthorEl.textContent = "Model By ";
const modelAuthorLinkEl = document.createElement("a");
modelAuthorLinkEl.textContent = "Lexyc16";
modelAuthorLinkEl.href =
  "https://sketchfab.com/3d-models/nissan-fairlady-300zx-z32-1989-8c04336a4ed84f6f836760db8256f9f0";
modelAuthorDivEl.append(modelAuthorEl, modelAuthorLinkEl);

//Page
const pageAuthorDivEl = document.createElement("div");
const pageAuthorEl = document.createElement("p");
pageAuthorEl.textContent = "Page By ";
const pageAuthorLinkEl = document.createElement("a");
pageAuthorLinkEl.textContent = "Logout";
pageAuthorLinkEl.href = "https://github.com/mvbertos";
pageAuthorDivEl.append(pageAuthorEl, pageAuthorLinkEl);

creditEl.append(modelAuthorDivEl, pageAuthorDivEl);
vInfoEl.append(creditEl);
