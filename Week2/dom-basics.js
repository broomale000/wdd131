const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("al", "Random Photo");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newh2 = document.createElement("h2");
newh2.textContent = "DOM Basics";
const newp = document.createElement("p");
newp.textContent = "This was added through Javascript";
newSection.appendChild(newh2);
newSection.appendChild(newp);
document.body.appendChild(newSection);

// Shown alternative solution

// const newSection = document.createElement("section");
// newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
// document.body.appendChild(newSection);