// Soldier
function Soldier (health, strength) {
	this.health = health;
	this.strength = strength;

	this.receiveDamage = function(damage) {
		var currentHealth = this.health;
		var newHealth = currentHealth - damage;
		this.health = newHealth;
	}
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
