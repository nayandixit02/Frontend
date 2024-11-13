//Facts about cat

//let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(err){
//         console.log("error -", err);
//         return "No fact found";
//     }
// }


//Dog images

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let res = await getImage();
//     let img = document.querySelector("img");
//     img.setAttribute("src", res);
// })

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(err){
//         console.log(err);
//         return "/";
//     }
// }


//List of all colleges of a country

// let url3 = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     let colArray = await getColleges(country);
//     show(colArray);
// });

// function show(colArr){
//     let list = document.querySelector("ul");
//     list.innerText = "";
//     for(col of colArr){
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try{
//         let res = await axios.get(url3+country);
//         return res.data;
//     }
//     catch(e){
//         console.log(e);
//     }
// }

//List of colleges of state of india

let url3 = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let colArray = await getColleges();
    show(colArray);
});

function show(colArr){
    let list = document.querySelector("ul");
    list.innerText = "";
    let state = document.querySelector("input").value;
    for(col of colArr){
        if(col["state-province"] == state){
            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
        }
        
    }
}

async function getColleges(){
    try{
        let res = await axios.get(url3);
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}