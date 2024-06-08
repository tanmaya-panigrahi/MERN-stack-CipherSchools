const heading = document.querySelectorAll("h1");

console.log(heading);

// firstHeading
const firstHeading = heading[0];
    // <h2>List of amazing fruits</h2>
const seconHeading = heading[1];
// secondHeading
    // <h2>Amazing palces in Kenya</h2>

document.querySelector(".orange").innerHTML;
//  "Oranges"

const appleList = document.querySelector(".apple-list");

console.log(appleList.innerHTML);
// console.log(appleList.children);

// console.log(appleList.childNodes);

console.log(appleList.firstChild);

console.log(appleList.lastChild);

console.log(appleList.parentElement);
//       <div class="wrapper-1">..</div>
// appleList.parentNode
//       <div class="wrapper-1">..</div>
// const btn1 = document.querySelector(".btn-1")
// btn1.closest("main")
//       <main>...</main>
// btn1
//     <button class="btn-1">Read full List</button>
// const orange = document.querySelector(".orange")

const apple  = orange.previousElemnentSibling;
const avocado = orange.nextElementSibling;

console.log(apple);
//   <li class="apple">..</li>
console.log(avocado)
//   <li class="avocado">..</li>