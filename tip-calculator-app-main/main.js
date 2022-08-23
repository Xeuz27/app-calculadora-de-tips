let TotalAccount = document.getElementById("totalAccount")
    //capturamos los botones de propina
let btntips = document.getElementsByClassName("btn-tip");
//como devuelve un html colleccion el cual no es manipulable 
// lo convertimos en un array
let btntipsArray = Array.from(btntips)
let btnCustom = document.getElementById("customTip");


btntipsArray.forEach(btnTip => {
    btnTip.addEventListener("click", function(e) {
        let totalAccountValue = TotalAccount.value;
        if (!totalAccountValue) {
            alert("agregar monto");
            return
        }
        if (e.target === btnCustom) {
            let customTip = Number(prompt("agregar porcentaje personalizado"));
            calcpropina(totalAccountValue,customTip);
            return
        }
        prop = btnTip.dataset["number"];
        calcpropina(totalAccountValue, prop);
    });

});

function calcpropina(totalAccountValue, prop) {
    porcentaje = prop / 100;
    var totalTip = totalAccountValue * porcentaje;
    var total = Number(totalAccountValue) + Number(totalTip);

    // alert("su propina es de " + total + "$");


    let people = document.getElementById("NPeople");
    let Npeople = Number(people.value);

    if (!Npeople) {
        alert("agregar personas");
        return
    }
    calcpropinaPersona(totalTip, Npeople)
    CalcTotalPersona(total, Npeople)
}




function calcpropinaPersona(totalTip, Npeople) {
    let propinaPersona = totalTip / Npeople;
    console.log(propinaPersona);
    imprimirTipPorPersona(propinaPersona);
}

function imprimirTipPorPersona(propinaPersona) {
    let tipPerson = document.getElementById("tipPerson")
    tipPerson.innerText = propinaPersona + "$";
}

function CalcTotalPersona(total, NPeople) {
    let TotalPersona = Number(total) / Number(NPeople);
    console.log(TotalPersona)
    imprimirTotalPersona(TotalPersona);
}

function imprimirTotalPersona(TotalPersona) {
    let totaltotal = document.getElementById("tipTotal");
    totaltotal.innerText = TotalPersona + "$";
}