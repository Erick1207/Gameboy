const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const size = 30;

let ligado = true;

let direcao = "Right";

let repetir = 4;

let teclaPressionada = false;

let velocidade = 300;

let carro = [
    [{}, {x: 180, y: 480}, {}],
    [{x: 150, y: 510}, {x: 180, y: 510}, {x: 210, y: 510}],
    [{}, {x: 180, y: 540}, {}],
    [{x: 150, y: 570}, {}, {x: 210, y: 570}]
]

let carroDireita = [
    [{}, {x: 180, y: 600}, {}],
    [{x: 150, y: 630}, {x: 180, y: 630}, {x: 210, y: 630}],
    [{}, {x: 180, y: 660}, {}],
    [{x: 150, y: 690}, {}, {x: 210, y: 690}]
]

let carroEsquerda = [
    [{}, {x: 90, y: 600}, {}],
    [{x: 60, y: 630}, {x: 90, y: 630}, {x: 120, y: 630}],
    [{}, {x: 90, y: 660}, {}],
    [{x: 60, y: 690}, {}, {x: 120, y: 690}]
]

const parede1 = [{x: 0, y: -90}, {x: 0, y: -60}, {x: 0, y: -30}]
const parede2 = [{x: 0, y: 60}, {x: 0, y: 90}, {x: 0, y: 120}];
const parede3 = [{x: 0, y: 210}, {x: 0, y: 240}, {x: 0, y: 270}];
const parede4 = [{x: 0, y: 360}, {x: 0, y: 390}, {x: 0, y: 420}];
const parede5 = [{x: 0, y: 510}, {x: 0, y: 540}, {x: 0, y: 570}];

const parede6 = [{x: 270, y: -90}, {x: 270, y: -60}, {x: 270, y: -30}]
const parede7 = [{x: 270, y: 60}, {x: 270, y: 90}, {x: 270, y: 120}];
const parede8 = [{x: 270, y: 210}, {x: 270, y: 240}, {x: 270, y: 270}];
const parede9 = [{x: 270, y: 360}, {x: 270, y: 390}, {x: 270, y: 420}];
const parede10 = [{x: 270, y: 510}, {x: 270, y: 540}, {x: 270, y: 570}];

const outrosCarros = () => {
    repetir++;

    if(repetir == 5){

    let situacao = Math.floor(Math.random() * 3) + 1;

    if(situacao == 1 && carroDireita[3][2].y > canvas.height){

        carroDireita[0] = [{}, {x: 180, y: -120}, {}]
        carroDireita[1] = [{x: 150, y: -90}, {x: 180, y: -90}, {x: 210, y: -90}]
        carroDireita[2] = [{}, {x: 180, y: -60}, {}]
        carroDireita[3] = [{x: 150, y: -30}, {}, {x: 210, y: -30}]

        repetir = 0;

    }else if(situacao == 2 && carroEsquerda[3][2].y > canvas.height){
         
        carroEsquerda[0] = [{}, {x: 90, y: -120}, {}],
        carroEsquerda[1] = [{x: 60, y: -90}, {x: 90, y: -90}, {x: 120, y: -90}],
        carroEsquerda[2] = [{}, {x: 90, y: -60}, {}],
        carroEsquerda[3] = [{x: 60, y: -30}, {}, {x: 120, y: -30}]

        repetir = 0;

    }else{
        null;
        repetir = 0;
    }
}
}

const desenhar = () => {
    ctx.fillStyle = "#3F4538";

    carro[0].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carro[1].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carro[2].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carro[3].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });

    carroDireita[0].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carroDireita[1].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carroDireita[2].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carroDireita[3].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });

    carroEsquerda[0].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carroEsquerda[1].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carroEsquerda[2].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });
    carroEsquerda[3].forEach((position) => {
         ctx.fillRect(position.x, position.y, size, size);
    });

    parede1.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
     parede2.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
    parede3.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
    parede4.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
    parede5.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
    parede6.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
     parede7.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
    parede8.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
    parede9.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
    parede10.forEach((position) => {
        ctx.fillRect(position.x, position.y, size, size);
    });
}

const mover = () => {

    if(ligado == true){

    carroDireita[0][1].y = carroDireita[0][1].y + size;
    carroDireita[1][0].y = carroDireita[1][0].y + size;
    carroDireita[1][1].y = carroDireita[1][1].y + size;
    carroDireita[1][2].y = carroDireita[1][2].y + size;
    carroDireita[2][1].y = carroDireita[2][1].y + size;
    carroDireita[3][0].y = carroDireita[3][0].y + size;
    carroDireita[3][2].y = carroDireita[3][2].y + size;

    carroEsquerda[0][1].y = carroEsquerda[0][1].y + size;
    carroEsquerda[1][0].y = carroEsquerda[1][0].y + size;
    carroEsquerda[1][1].y = carroEsquerda[1][1].y + size;
    carroEsquerda[1][2].y = carroEsquerda[1][2].y + size;
    carroEsquerda[2][1].y = carroEsquerda[2][1].y + size;
    carroEsquerda[3][0].y = carroEsquerda[3][0].y + size;
    carroEsquerda[3][2].y = carroEsquerda[3][2].y + size;

    const head = parede1[parede1.length - 1]

    if (parede1[2].y >= canvas.height) {
        parede1[2].y = -150;
    }

    parede1.shift()

    if(ligado == true){
        parede1.push({x: head.x, y: head.y + size})
    }

    const head2 = parede2[parede2.length - 1]

    if (parede2[2].y >= canvas.height) {
        parede2[2].y = -150;
    }

    parede2.shift()

    if(ligado == true){
        parede2.push({x: head2.x, y: head2.y + size})
    }

    const head3 = parede3[parede3.length - 1]

    if (parede3[2].y >= canvas.height) {
        parede3[2].y = -150;
    }

    parede3.shift()

    if(ligado == true){
        parede3.push({x: head3.x, y: head3.y + size})
    }

    const head4 = parede4[parede4.length - 1]

    if (parede4[2].y >= canvas.height) {
        parede4[2].y = -150;
    }

    parede4.shift()

    if(ligado == true){
        parede4.push({x: head4.x, y: head4.y + size})
    }

    const head5 = parede5[parede5.length - 1]

    if (parede5[2].y >= canvas.height) {
        parede5[2].y = -150;
    }

    parede5.shift()

    if(ligado == true){
        parede5.push({x: head5.x, y: head5.y + size})
    }  

    const head6 = parede6[parede6.length - 1]

    if (parede6[2].y >= canvas.height) {
        parede6[2].y = -150;
    }

    parede6.shift()

    if(ligado == true){
        parede6.push({x: head6.x, y: head6.y + size})
    }

    const head7 = parede7[parede7.length - 1]

    if (parede7[2].y >= canvas.height) {
        parede7[2].y = -150;
    }

    parede7.shift()

    if(ligado == true){
        parede7.push({x: head7.x, y: head7.y + size})
    }

    const head8 = parede8[parede8.length - 1]

    if (parede8[2].y >= canvas.height) {
        parede8[2].y = -150;
    }

    parede8.shift()

    if(ligado == true){
        parede8.push({x: head8.x, y: head8.y + size})
    }

    const head9 = parede9[parede9.length - 1]

    if (parede9[2].y >= canvas.height) {
        parede9[2].y = -150;
    }

    parede9.shift()

    if(ligado == true){
        parede9.push({x: head9.x, y: head9.y + size})
    }

    const head10 = parede10[parede10.length - 1]

    if (parede10[2].y >= canvas.height) {
        parede10[2].y = -150;
    }

    parede10.shift()

    if(ligado == true){
        parede10.push({x: head10.x, y: head10.y + size})
    }
}
}

const dirigir = () => {
    if(direcao == "Left"){
        carro[0] = [{}, {x: 90, y: 480}, {}]
        carro[1] = [{x: 60, y: 510}, {x: 90, y: 510}, {x: 120, y: 510}]
        carro[2] = [{}, {x: 90, y: 540}, {}]
        carro[3] = [{x: 60, y: 570}, {}, {x: 120, y: 570}]
    }else{
        carro[0] = [{}, {x: 180, y: 480}, {}]
        carro[1] = [{x: 150, y: 510}, {x: 180, y: 510}, {x: 210, y: 510}]
        carro[2] = [{}, {x: 180, y: 540}, {}]
        carro[3] = [{x: 150, y: 570}, {}, {x: 210, y: 570}]
    }
}

document.addEventListener("keydown", (event) => {
   if(event.key === " "){
    teclaPressionada = true;
    setInterval();
   }
});

document.addEventListener("keyup", (event) => {
   if(event.key === " "){
    teclaPressionada = false;
    setInterval();
   }
});

document.addEventListener("keydown", (event) => {
   if(event.key === "ArrowLeft" && direcao != "Left"){
    direcao = "Left";
   }
});

document.addEventListener("keydown", (event) => {
   if(event.key === "ArrowRight" && direcao != "Right"){
    direcao = "Right";
   }
});

const aumentarVelocidade = () => {
    if(teclaPressionada == true){
        velocidade = 100;
    }else{
        velocidade = 300;
    }
}

setInterval(() => {
    ctx.clearRect(0, 0, 300, 600);
    dirigir();
    outrosCarros();
    desenhar();
    mover();
}, velocidade)

