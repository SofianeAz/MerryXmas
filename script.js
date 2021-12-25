


// var mynum = 10;





// console.log(10 % 5 === 0)
// console.log(Stars.repeat(5));



const bowl = "/\\";
const Stars = "*";

const nline = "<br/>";

const titleContainer = document.getElementById('container');

const mySapin = document.getElementById('sapin');


const heightInput = document.getElementById('getnum');
const nameInput = document.getElementById('getname');
const doItInput = document.getElementById('senddata');

const wishContainer = document.getElementById('wishing');


doItInput.addEventListener('click', () => createSapin(heightInput.value, nameInput.value) );


// const topStar = "__/\\__ \n"+"\\ ** /\n"+"/_**_\\";
const topStar = "https://m.media-amazon.com/images/I/71XMX2+-JwL._AC_SL1500_.jpg";



// CREATE YOUR SAPIN
function createSapin(param1, param2) {

    console.log(param1);
    console.log(param2);
    // titleContainer.classList.add('hide');

    heightInput.classList.add('hide');
    nameInput.classList.add('hide');
    doItInput.classList.add('hide');

    for (let j = 0; j <= param1; j++) {
        if (j === 1) {
            const starContainer = document.createElement('p');
            mySapin.appendChild(starContainer);
            starContainer.setAttribute('class', 'bigstar');
            starContainer.append("★");
            // starContainer.innerHTML += `<img id="starimage" src="${topStar}" />`;
            // mySapin.innerHTML += `<img id="starimage" src="${topStar}" />`;
            mySapin.innerHTML +=`<p class="red">${bowl}</p>`;
        }
        else if (j % 2 === 0 && j != 0 && j != 1) {
            const starContainer = document.createElement('p');
            mySapin.appendChild(starContainer);
            starContainer.setAttribute('class', 'green');
            starContainer.append("_./" + Stars.repeat(j) + "\\._")
            console.log(("/" + Stars.repeat(j) + "\\").length / 2);
        }
        // else {
        else if (j % 1 === 0 && j != 0 && j != 1) {
            const starContainer = document.createElement('p');
            mySapin.appendChild(starContainer);
            starContainer.setAttribute('class', 'lightblue');
            starContainer.append("__./" + Stars.repeat(j) + "\\.__")
            console.log(("/" + Stars.repeat(j) + "\\").length / 2);
        }
    };

    const wishingYou = `<h3 class="iwishyou"> I wish you a Merry Christmas my lovely ${param2} !</h3>`;
    wishContainer.innerHTML += wishingYou;
}


