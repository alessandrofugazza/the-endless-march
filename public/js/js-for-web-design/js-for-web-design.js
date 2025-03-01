const elements = [];

class DOMElement {
  constructor(_type, _attributes = {}) {
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
    this.thisFrame = addElementToFrame("div", this.parentFrame, { class: "topic-frame" });
    // this.thisFrame.style.display = "none";
    // this.thisFrame.style.opacity = "0";
    this.elements.forEach((element) => {
      addElementToFrame(element.type, this.thisFrame, element.attributes);
    });
  }
  show() {
    this.thisFrame.classList.add("show");
  }
  hide() {
    this.thisFrame.classList.remove("show");
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
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
mainContainer.style.minHeight = "30vh";
let activeFrame = mainContainer;

const frames = [
  new Frame(
    "Frame 1",
    [
      new DOMElement("h2", { textContent: "Variables" }),
      new DOMElement("p", { textContent: "Something about variables I guess" }),
      new DOMElement("hr"),
      new DOMElement("h3", { textContent: "Super long text" }),
      new DOMElement("p", {
        textContent:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ipsum ut turpis rhoncus aliquam. Donec vulputate aliquam dictum. Duis sit amet erat fermentum, aliquam dolor nec, rhoncus tortor. Nulla eu est id metus consectetur malesuada et tristique leo. Phasellus iaculis nulla eros, id suscipit elit elementum a. Suspendisse ut sem tempor, ultrices diam id, venenatis quam. Integer feugiat blandit ipsum, sed rutrum magna fringilla nec. Aenean nisl magna, commodo et porttitor eget, lobortis id neque. Aenean elementum feugiat sem ac dictum. Aenean maximus pellentesque eros quis faucibus. Cras eleifend tincidunt lacus, eget sodales lacus venenatis egestas. In auctor vitae diam congue facilisis. Nulla hendrerit viverra tempus. Suspendisse vel viverra turpis. Praesent ornare scelerisque magna quis blandit. ",
      }),
    ],
    mainContainer
  ),
  new Frame(
    "Frame 2",
    [new DOMElement("p", { textContent: "YOO" }), new DOMElement("h4", { textContent: "H4 HERE" })],
    mainContainer
  ),
];

function startMainScript() {
  frames[blockIndex].populate();
  // frames.forEach((frame) => {
  //   frame.populate();
  // });
  prevBtn.onclick = function () {
    if (blockIndex === 0) return;
    blockIndex--;
    frames[blockIndex].populate();
    mainContainer.replaceChildren(frames[blockIndex].thisFrame);
  };
  nextBtn.onclick = function () {
    if (blockIndex === frames.length - 1) return;
    // blockIndex++;
    // frames[blockIndex].populate();
    // mainContainer.replaceChildren(frames[blockIndex].thisFrame);
    fadeOutAndReplace();
  };
}

function fadeOutAndReplace() {
  frames[blockIndex].thisFrame.classList.add("fade-out");
  frames[blockIndex].thisFrame.addEventListener("transitionend", () => {
    blockIndex++;
    frames[blockIndex].populate();
    mainContainer.replaceChildren(frames[blockIndex].thisFrame);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // populateElements();
  startMainScript();
});
