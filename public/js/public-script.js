document.addEventListener("DOMContentLoaded", function () {
  console.log("PUBLIC JS READY");
  const playground = document.querySelector(".playground");
  //   let elements = document.getElementsByClassName("playground");
  //   arrElements = Array.from(elements);
  //   numberOfElements = arrElements.length;
  //   console.log(`${numberOfElements} element${numberOfElements > 1 ? "s" : ""} found!`);
  //   Array.from(elements).forEach((element) => {
  //     console.log(element.innerHTML);
  //   });
  //   let querySelectedElement = document.querySelector(".playground");
  //   console.log("This was query selected: ", querySelectedElement.innerHTML);
  //   let querySelectedElements = document.querySelectorAll(".playground");
  //   console.log(querySelectedElements);
  //   querySelectedElements.forEach((element) => {
  //     console.log(element.innerHTML);
  //   });
  //   console.log(elements);
  let newCode = document.createElement("code");
  newCode.textContent = "This is a code tag coming from my plugin.";
  playground.appendChild(newCode);
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a paragraph tag coming from my plugin.";
  newParagraph.style.color = "red";
  playground.appendChild(newParagraph);
});
