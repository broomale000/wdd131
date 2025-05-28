
// // const buttonElement = document.getElementById("submitButton");

// // function copyInput(event) {
// //   // take a look at the event!
// //   console.log(event);
// //   const inputElement = document.getElementById("inputBox");
// //   const outputElement = document.getElementById("output");
// //   outputElement.innerHTML = inputElement.value;
// // }

// // buttonElement.addEventListener("click", copyInput);

// const log = document.querySelector("#log");

// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   // how do we know which key was pressed?
//   console.log(e);
//   // checkout e.code, e.key, and e.keyCode
//   // what is the difference?
// }

// Toggle Menu
const button = document.querySelector(".menu");

    function togglehide(event) {
        console.log(event);
        navigation = document.querySelector(".navigation");
        navigation.classList.toggle('hide');
    }

button.addEventListener("click", togglehide);

// Resize
function resize() {
    const navigation = document.querySelector(".navigation");

    if (window.innerWidth > 1000) {
        navigation.classList.remove("hide");
    } else {
        navigation.classList.add("hide");
    }

    resize();
    window.addEventListener("resize", resize);
}


// Toggle Modal
const modal = document.getElementById("modal");
const openModal = document.getElementsByClassName("gallery")[0];
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", (event) => {
    const objectclicked = event.target;

  if (objectclicked.tagName === "IMG") {
    modal.classList.add("open");
  }
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
});

modal.addEventListener("click", (event) => {
    const objectclicked = event.target;

    if (objectclicked.tagName != "IMG") {
    modal.classList.remove("open");
    }
});
