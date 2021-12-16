function cat(name, age) {
    this.name = name;
    this.age = age;
    this.die = false;
    this.stomatch = [];
}

cat.prototype.die () {
    this.die = true;
}

cat.prototype.eat = function(mouse) {
    this.stomatch.push(mouse);
    mouse.die;
}

module.exports = cat;
