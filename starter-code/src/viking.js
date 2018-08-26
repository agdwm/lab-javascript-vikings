// Soldier
function Soldier (health, strength) {
	this.health = health;
	this.strength = strength;
}

Soldier.prototype.receiveDamage = function(damage) {
	this.health = this.health - damage;
}

Soldier.prototype.attack = function() {
	return this.strength;
}

var soldier1 = new Soldier(100, 50);
soldier1.receiveDamage(10);


// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
