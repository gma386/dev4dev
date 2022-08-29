class Plug {
    constructor(tomada) {
        this.tomada = tomada;
    }
}

class Interruptor {
    constructor(botao) {
        this.botao = botao;
    }
}

class Receptaculo {
    constructor(conectada) {
        this.conectada = conectada;
    }

}

class Lampada {
    constructor(energia, conectada) {
        this.energia = energia;
        this.conectada = conectada;
    }

    status() {
        if (this.energia == true && this.conectada == true) {
            return `ACESA` 
        } else {
            `APAGADA`
        }
    }
}

var plug = new Plug(false);
var interruptor = new Interruptor(false);
var receptaculo = new Receptaculo(false, false);
var lampada = new Lampada(false, false);

const btn = document.querySelector("#send");
btn.addEventListener("click", function(e){
    e.preventDefault();

    const plug1 = document.getElementById("plugtrue");
    const interruptor1 = document.getElementById("interruptortrue");
    const receptaculo1 = document.getElementById("receptaculotrue");
    const lampada1 = document.getElementById("lampadatrue");
    //const plug1 = document.querySelector("#plug")
    if(plug1.checked == true) {
        plug.tomada = true;
    } else {
        plug.tomada = false;
    }

    if(interruptor1.checked == true) {
        interruptor.botao = true;
    }

    if (receptaculo1.checked == true) {
        receptaculo.
    }
    
});




function ligarLampada (plug, interruptor, receptaculo, lampada) {
 return;
}
