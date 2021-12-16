function mouse(name,age) {
    this.name = name;
    this.age = age;
    this.die = false;
}

mouse.prototype.die(){
    this.die = true;
}

module.exports = mouse;