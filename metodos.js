const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const size = 30;

let ligado = true;

const parede1 = [{x: 0, y: 60}, {x: 0, y: 90}, {x: 0, y: 120}];
const parede2 = [{x: 0, y: 210}, {x: 0, y: 240}, {x: 0, y: 270}];
const parede3 = [{x: 0, y: 360}, {x: 0, y: 390}, {x: 0, y: 420}];
const parede4 = [{x: 0, y: 510}, {x: 0, y: 540}, {x: 0, y: 570}];

const parede5 = [{x: 270, y: 60}, {x: 270, y: 90}, {x: 270, y: 120}];
const parede6 = [{x: 270, y: 210}, {x: 270, y: 240}, {x: 270, y: 270}];
const parede7 = [{x: 270, y: 360}, {x: 270, y: 390}, {x: 270, y: 420}];
const parede8 = [{x: 270, y: 510}, {x: 270, y: 540}, {x: 270, y: 570}];

const desenhar = () => {
    ctx.fillStyle = "#3F4538";

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
}

const mover = () => {

    if(ligado == true){

    const head = parede1[parede1.length - 1]

    if (parede1[2].y >= canvas.height) {
        parede1[2].y = 0;
    }

    parede1.shift()

    if(ligado == true){
        parede1.push({x: head.x, y: head.y + size})
    }

    const head2 = parede2[parede2.length - 1]

    if (parede2[2].y >= canvas.height) {
        parede2[2].y = 0;
    }

    parede2.shift()

    if(ligado == true){
        parede2.push({x: head2.x, y: head2.y + size})
    }

    const head3 = parede3[parede3.length - 1]

    if (parede3[2].y >= canvas.height) {
        parede3[2].y = 0;
    }

    parede3.shift()

    if(ligado == true){
        parede3.push({x: head3.x, y: head3.y + size})
    }

    const head4 = parede4[parede4.length - 1]

    if (parede4[2].y >= canvas.height) {
        parede4[2].y = 0;
    }

    parede4.shift()

    if(ligado == true){
        parede4.push({x: head4.x, y: head4.y + size})
    }

    const head5 = parede5[parede5.length - 1]

    if (parede5[2].y >= canvas.height) {
        parede5[2].y = 0;
    }

    parede5.shift()

    if(ligado == true){
        parede5.push({x: head5.x, y: head5.y + size})
    }  

    const head6 = parede6[parede6.length - 1]

    if (parede6[2].y >= canvas.height) {
        parede6[2].y = 0;
    }

    parede6.shift()

    if(ligado == true){
        parede6.push({x: head6.x, y: head6.y + size})
    }

    const head7 = parede7[parede7.length - 1]

    if (parede7[2].y >= canvas.height) {
        parede7[2].y = 0;
    }

    parede7.shift()

    if(ligado == true){
        parede7.push({x: head7.x, y: head7.y + size})
    }

    const head8 = parede8[parede8.length - 1]

    if (parede8[2].y >= canvas.height) {
        parede8[2].y = 0;
    }

    parede8.shift()

    if(ligado == true){
        parede8.push({x: head8.x, y: head8.y + size})
    }
}
}

setInterval(() => {
    ctx.clearRect(0, 0, 300, 600);
    desenhar();
    mover();
}, 400)


