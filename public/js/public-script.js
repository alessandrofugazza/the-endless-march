document.addEventListener("DOMContentLoaded", function () {
  console.log("PUBLIC JS READY");
  let elements = document.getElementsByClassName("playground");
  //   for (let i = 0; i < elements.length; i++) {
  //     console.log(elements[i].innerHTML);
  //   }
  arrElements = Array.from(elements);
  numberOfElements = arrElements.length;
  console.log(`${numberOfElements} element${numberOfElements > 1 ? "s" : ""} found!`);
  Array.from(elements).forEach((element) => {
    console.log(element.innerHTML);
  });
});
