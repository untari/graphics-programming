function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(125); 

    // materials and light
    ambientMaterial(255);
    pointLight(255, 0, 0 , mouseX-width/2, mouseY-height/2, 100);
    pointLight(0, 255, 0, 0, -200, 100);
    sphere(100, 50, 50);
//     rectMode(CENTER);
//     // rotateX(frameCount);
//     // rotateZ(frameCount);
//     rotateY(frameCount);
//     translate(200, 0, 0);
//     box(200);
}
