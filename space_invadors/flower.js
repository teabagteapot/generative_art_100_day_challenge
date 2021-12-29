function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 13;
    this.xdir = 1;
    this.ydir = 0;

    this.show = function() {
        fill(255, 0, 255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.grow = function() {
        this.r += 3; 
    }

    this.move = function() {
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;
    }

    this.shiftDown = function() {
        this.xdir *= -1;
        this.ydir += 0.1;
    }
}