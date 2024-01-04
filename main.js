noseX = "";
noseY = "";
leftWristX = "";
rightWristX = "";
font_size = "";

function setup() {
    canvas = createCanvas(550, 500);
    canvas.center();
    canvas.position(800, 250)

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 250);

    poseNet = ml5.poseNet(video, modelloaded);
}

function draw() {
    background("grey");
    fill("red");
    stroke("black");
    textSize(font_size);
    text("Jeevun", noseX, noseY);
    document.getElementById("size").innerHTML = "the size of the font is " + font_size + "px";
}

function modelloaded() {
    console.log("model loaded succesfully");
    poseNet.on("pose", get_results)
}

function get_results(r) {
    if (r.length > 0) {
        console.log(r);
        noseX = r[0].pose.nose.x;
        noseY = r[0].pose.nose.y;
        leftWristX = r[0].pose.leftWrist.x;
        rightWristX = r[0].pose.rightWrist.x;
        font_size = floor(leftWristX - rightWristX);
    }
}