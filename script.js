// const h1 = document.getElementById("h1");
// const h2 = document.getElementById("h2");
// const p = document.getElementById("malumot");

// const ism = "Madina";
// const familiya = "Makhkamova";
// const malumot ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolore laborum quo a delectus vero voluptatem aspernatur fugit distinctio quas! Quasi sed quisquam nihil recusandae modi exercitationem eaque illo dolorum";


// h1.innerText = ism;
// h2.innerText = familiya;
// p.innerText = malumot;
const container = document.getElementById("container");
const input = document.getElementById("inp");
const button = document.getElementById("btn");
const arr = [
    "olma",
    "banan",
    "shaftoli",
    "yongoq"
];

function addFruit(){
    arr.push(input.value);
    container.innerHTML = "";
    render();
    input.value = "";

}
button.addEventListener("click", addFruit)

function render(){
    for(let i = 0; i < arr.length; i++){

const newelement = document.createElement("li");
newelement.innerText = arr[i];
container.appendChild(newelement);

}

}
render();

// background
let bkg = document.getElementById("bkg");
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF', '#33FFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    bkg.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 1000);



