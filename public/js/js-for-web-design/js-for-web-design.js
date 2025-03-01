const elements = [];

class DOMElement {
  constructor(_type, _attributes, _frame) {
    this.type = _type;
    this.attributes = _attributes;
  }
}

class Frame {
  constructor(_title, _elements, _parentFrame) {
    this.title = _title;
    this.elements = _elements;
    this.parentFrame = _parentFrame;
  }
  populate() {
    const thisFrame = addElement("div", this.parentFrame);
    this.elements.forEach((element) => {
      addElement(element.type, thisFrame, element.attributes);
    });
  }
}

function addElement(type, frame = activeFrame, attributes = {}) {
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

let blockIndex = 0;
const mainContainer = document.querySelector(".jsfwd-container");
let activeFrame = mainContainer;

const frames = [
  new Frame(
    "Frame 1",
    [new DOMElement("p", { textContent: "YO" }), new DOMElement("h3", { textContent: "H3 HERE" })],
    mainContainer
  ),
  new Frame(
    "Frame 2",
    [new DOMElement("p", { textContent: "YOO" }), new DOMElement("h4", { textContent: "H4 HERE" })],
    mainContainer
  ),
];

// const populateElements = () => {
// activeFrame = mainContainer;
// elements.push({frame[new DOMElement("p", { textContent: "YO" }), new DOMElement("h3", { textContent: "H3 HERE" })]});
// elements.push([new DOMElement("p", { textContent: "YO" }), new DOMElement("h3", { textContent: "H3 HERE" })]);
// };

function startMainScript() {
  // const nextButton = addElement("button", { textContent: "NEXT" });
  // nextButton.onclick = function () {
  //   elements[blockIndex].forEach((element) => {
  //     addElement(element.type, element.attributes);
  //   });
  // };
  // elements.forEach((elementsBlock) => {
  //   elementsBlock.forEach((element) => {
  //     addElement(element.type, element.attributes, element.frame);
  //   });
  // });
  frames.forEach((frame) => {
    frame.populate();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // populateElements();
  startMainScript();
});
