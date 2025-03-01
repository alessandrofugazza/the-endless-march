let activeFrame = null;
const elements = [];

class DOMElement {
  constructor(_type, _attributes, _frame) {
    this.type = _type;
    this.attributes = _attributes;
    this.frame = _frame;
  }
}

function addElement(type, attributes, frame = activeFrame) {
  const element = document.createElement(type);
  for (let key in attributes) {
    if (key === "textContent") {
      element.textContent = attributes[key];
    } else {
      element.setAttribute(key, attributes[key]);
    }
  }
  if (frame) {
    frame.appendChild(element);
  }
  return element;
}

const mainContainer = document.querySelector(".jsfwd-container");

const populateElements = () => {
  activeFrame = mainContainer;
  elements.push([new DOMElement("p", { textContent: "YO" }), new DOMElement("h3", { textContent: "H3 HERE" })]);
};

function startMainScript() {
  elements.forEach((elementsBlock) => {
    elementsBlock.forEach((element) => {
      addElement(element.type, element.attributes, element.frame);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  populateElements();
  startMainScript();
});
