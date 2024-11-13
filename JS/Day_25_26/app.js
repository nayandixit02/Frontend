// Call Hell
// function saveToDB(data, success, failure){
//     let netSpeed = Math.floor(Math.random() * 10)+1;
//     if(netSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// saveToDB(
//     "Piyush", 
//     () => {
//         console.log("Piyush saved");
//         saveToDB(
//             "Priyanshu",
//             () => {
//                 console.log("Priyanshu saved");
//                 saveToDB(
//                     "Nayan",
//                     () => {
//                         console.log("Nayan saved");
//                     },
//                     () => {
//                         console.log("Not saved, weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("Not saved, weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("Not saved, weak connection")
//     }
// );

// console.log("call hell end promise start");

// //Promise
// function saveToDBPractise(){
//     return new Promise((resolve, reject) => {
//         let netSpeed = Math.floor(Math.random() * 10)+1;
//         if(netSpeed > 4){
//             resolve("succes: data was saved");
//         }
//         else{
//             reject("failure: weak connection");
//         }
//     });        
// }

// saveToDBPractise("Piyush")
//     .then((result) => {
//         console.log("Piyush saved");
//         console.log(result);
//         return saveToDBPractise("Priyanshu");
//     })
//     .then((result) => {
//         console.log("Priyanshu saved");
//         console.log(result);
//         return saveToDBPractise("Nayan");
//     })
//     .then((result) => {
//         console.log("Nayan saved");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("weak connection failure!");
//         console.log(error);
//     });

// console.log("Refactoring our color change code through promises");

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            if(num > 3){
                reject("Promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    });
}

// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color changed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("orange color changed");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("green color changed");
//         return changeColor("yellow", 1000);
//     })
//     .then(() => {
//         console.log("Yellow color changed");
//     })
//     .catch(() => {
//         console.log("can't change");
//     });

//we can short our code using await keyword and async function
async function demo() {
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
    }
    catch(error){
        console.log("error caugth");
        console.log(error);
    }

    let a=5;
    console.log(a);
    console.log("new number = ", a+3);
}

demo();