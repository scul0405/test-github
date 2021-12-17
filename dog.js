function dog(name,age) {
    this.name = name;
    this.age = age;
    this.die = false;
    this.stomach = [];
}

dog.prototype.die () {
    this.die = true;
}

function eat(mouse) {
    dog.stomach.push(mouse);
    mouse.die();
}

module.exports = dog;
