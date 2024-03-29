function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(125); 

    camera(0, -200, height, 0, 0, 0, 0, 1, 0);
    perspective(60, width/height, mouseY, mouseX);

    normalMaterial();

    for(var i = -600; i <= 600; i += 150){
        push();
        translate(i, 0, 0);
        box(80, 80, 500);
        pop();
    }

    // make it zoom in and out
    // var zLoc = ((sin(frameCount) + 1) / 2 * height) + 200;
    // var xLoc = map(noise(frameCount/100), 0, 1, -500, 500);
    // var yLoc = map(noise(frameCount/100 + 100), 0, 1, -500, 500);
    // var zLoc = map(noise(frameCount/100 + 150), 0, 1, 300, 800);

    // circling around the object
    // var xLoc = cos(frameCount) * height;
    // var yLoc = sin(frameCount) * 300;
    // var zLoc = sin(frameCount) * height;

    // define where the camera pointing at
    // var xAim = sin(frameCount * 3) * 300;
    // camera(0, 0, height, xAim, 0, 0, 0, 1, 0);

    // materials and light
    // noStroke();
    // ambientMaterial(255, 255, 255);
    // directionalLight(255, 0, 0, 1, 0, 0);
    // pointLight(255, 0, 0 , mouseX-width/2, mouseY-height/2, 100);
    // pointLight(0, 255, 0, 0, -200, 100);
    // sphere(100, 30, 50);
    // rectMode(CENTER);

    // rotateX(frameCount);
    // rotateZ(frameCount);
    // rotateY(frameCount);
    // translate(200, 0, 0);
    // box(200);
}
