function preload() {}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {   
    image(video, 40, 20, 510, 370);
    line(50, 380, 50, 20);
    stroke(255, 0, 0);
    strokeWeight(20);

    line(540, 380, 540, 20);
    stroke(255, 0, 0);
    strokeWeight(20);

    line(540, 20, 50, 20);
    stroke(255, 0, 0);
    strokeWeight(20);

    line(540, 380, 50, 380);
    stroke(255, 0, 0);
    strokeWeight(20);
}

function take_snapshot() {
    save('your_name.jpg');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}