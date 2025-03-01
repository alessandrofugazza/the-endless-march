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
    this.thisFrame = null; // lol
  }
  populate() {
    this.thisFrame = addElementToFrame("div", this.parentFrame);
    this.thisFrame.style.display = "none";
    this.elements.forEach((element) => {
      addElementToFrame(element.type, this.thisFrame, element.attributes);
    });
  }
  show() {
    this.thisFrame.style.display = "block";
  }
}

function addElementToFrame(type, frame = activeFrame, attributes = {}) {
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

// BAD
function addElementToDOM(type, frame = mainContainer, attributes = {}) {
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

function startMainScript() {
  const nextButton = addElementToDOM("button", activeFrame, { textContent: "NEXT" });
  frames.forEach((frame) => {
    frame.populate();
  });
  nextButton.onclick = function () {
    frames[blockIndex].show();
    blockIndex += 1;
  };
}

document.addEventListener("DOMContentLoaded", function () {
  // populateElements();
  startMainScript();
});
