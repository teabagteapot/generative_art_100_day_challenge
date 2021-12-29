function Ship() {
    this.x = width / 2;
    this.xdir = 0;

    this.show = function() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height - 30, 20, 60);
    }

    this.move = function(dir){
        this.x += 5 * this.xdir;
    }

    this.setDir = function(dir){
        this.xdir = dir;
    }
}