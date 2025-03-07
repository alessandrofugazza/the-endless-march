// TODO atwindow load
// TODO add safe checks
// TODO add handlebars

const noTextTags = ["hr", "br"];

const mainContainer = document.querySelector(".lame-editor-container");
const form = mainContainer.querySelector("form");
const submitButton = form.querySelector(".wpform-lame-submit-btn");
const dataDisplayContainer = document.querySelector(".data-display-container");

submitButton.style.display = "none";

const formText = form.querySelector(".wpform-lame-text input");
// const formText = form.querySelector(".wpform-lame-text textarea");
const formTag = form.querySelector(".wpform-lame-html-tag");
const formStyle = form.querySelector(".wpform-lame-style-checkboxes");

const lameSubmitBtn = document.createElement("button");
lameSubmitBtn.type = "submit";
lameSubmitBtn.textContent = "Aggiungi";

const lameEraseBtn = document.createElement("button");
lameEraseBtn.type = "button";

btnDiv = document.createElement("div");
btnDiv.style.display = "flex";
btnDiv.style.gap = "10px";

btnDiv.appendChild(lameSubmitBtn);
// appending this here bc copy styles requires the element to be rendereed I CANNOT BOTHER WITH MANUALLY COPYING THE STYLE
form.appendChild(btnDiv);

const sourceElement = lameSubmitBtn;
const targetElement = lameEraseBtn;

const computedStyles = window.getComputedStyle(sourceElement);

for (let prop of computedStyles) {
  targetElement.style[prop] = computedStyles.getPropertyValue(prop);
}

lameEraseBtn.style.backgroundColor = "red";
lameEraseBtn.addEventListener("mouseover", function () {
  lameEraseBtn.style.backgroundColor = "darkred";
});

lameEraseBtn.addEventListener("mouseout", function () {
  lameEraseBtn.style.backgroundColor = "red";
});

lameEraseBtn.textContent = "Cancella tutto";

lameEraseBtn.style.width = "auto";

lameEraseBtn.addEventListener("click", function () {
  localStorage.removeItem("lameData");
  while (dataDisplayContainer.firstChild) {
    dataDisplayContainer.removeChild(dataDisplayContainer.firstChild);
  }
});

btnDiv.appendChild(lameEraseBtn);

form.onsubmit = function (event) {
  event.preventDefault();
  const selectedTag = formTag.querySelector(".wpforms-selected input");
  const tag = selectedTag.value;
  if (noTextTags.includes(tag)) {
    return;
  }
  const text = formText.value;
  // console.log(text.value);
  const selectedStyles = Array.from(formStyle.querySelectorAll("input[type='checkbox']:checked")).map((checkbox) =>
    checkbox.value.toLowerCase()
  );

  if (text.trim() !== "" && tag.trim() !== "") {
    const formData = { text, tag, style: selectedStyles };
    let lameStoredData = JSON.parse(localStorage.getItem("lameData")) || [];
    lameStoredData.push(formData);
    localStorage.setItem("lameData", JSON.stringify(lameStoredData));
  }
};

const loadData = () => {
  const lameStoredData = JSON.parse(localStorage.getItem("lameData")) || [];
  lameStoredData.forEach((element) => {
    const newElement = document.createElement(element.tag);
    newElement.textContent = element.text;
    // IMPROVE use obj with true false instead, using strings for booleans is bad
    if (element.style.includes("grassetto")) {
      newElement.style.fontWeight = "bold";
    }
    if (element.style.includes("corsivo")) {
      newElement.style.fontStyle = "italic";
    }
    dataDisplayContainer.appendChild(newElement);
  });
};

window.addEventListener("load", function () {
  loadData();
});
