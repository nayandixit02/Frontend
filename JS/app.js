// Random Color Generator
let heading = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");

function generateRBG() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

btn.addEventListener("click", function(){
    let color = generateRBG();
    heading.innerText = color;
    div.style.backgroundColor = color;
})


// let para1 = document.createElement("p");
// para1.innerText = "Hey I'm red!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3!";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").append(div);


