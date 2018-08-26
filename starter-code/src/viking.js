// Soldier
function Soldier (health, strength) {
	this.health = health;
	this.strength = strength;

	this.receiveDamage = function(damage) {
		this.health - damage;
	}
}

Soldier.prototype.attack = function() {
	return this.strength;
}


// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
