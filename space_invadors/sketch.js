var ship;
var flowers = [];
var drops = [];


function setup() {
    createCanvas(400, 300);
    ship = new Ship();

    for (var i = 0; i < 5; i++) {
        flowers[i] = new Flower(i * 60 + 80, 50);
    }
}

function draw() {
    background(50);
    ship.show();
    ship.move();
    
    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();

        for (var j = 0; j < flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {
                flowers[j].grow();
                drops[i].evaporate();
            }
        }
    }

    var edge = false;
    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();

        if( flowers[i].x > width || flowers[i].x < 0) {
            edge = true; 
        } 
    }
    if (edge) {
        for (var i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
        }
    }

    for (var i = drops.length-1; i >= 0; i--) {
        if (drops[i].toDelete) {
            drops.splice(i, 1); // what is this function?
        } 
    }

}

function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(ship.x, height-50);
        drops.push(drop);
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    } 
}

function keyReleased(){
    if (key != ' '){
    ship.setDir(0);}
}