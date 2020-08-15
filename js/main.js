
let parent = document.querySelector("h1");
let datummezo = document.createElement("h6");
datummezo.style.color = "black";
datummezo.innerHTML = new Date();
parent.appendChild(datummezo);


function calcAmount () {
    let price = 1000;
    let mennyiseg = document.querySelector("#mennyiseg");
    let mennyisegNumber = parseInt(mennyiseg.value);

    if (mennyisegNumber<0) {
        alert("Mínusz darab nem kérhető")
    } else if (mennyisegNumber>5){
        alert("Sajnos ennyi mennyiséget nem tudunk vállalni.")
    } 
    else {
    let fizetendo = price * mennyisegNumber;
    document.querySelector("#szumma").innerHTML = fizetendo;
    }
}

    
