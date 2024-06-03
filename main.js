status1 = ""
objects = []
i1 = ""

function preload() {
    i1 = loadImage("dog_cat.jpg")
}

function setup() {
    c = createCanvas(450, 350)
    c.center()
    OD = ml5.objectDetector("cocossd", modelLoaded)
}


function modelLoaded() {
    console.log("model loaded")
    status1 = true
    OD.detect(i1, gotResults)
}
function gotResults(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        objects = results;
    }
}

function draw() {
    image(i1, 0, 0, 450, 350)
    if (status1 != " ") {
        for (var i = 0; i < objects.length; i++){
        stroke("red")
        var p= objects[i].label+" "+floor(objects[i].confidence*100)+"%"
        text(p, objects[i].x, objects[i].y)
        noFill("white")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}
