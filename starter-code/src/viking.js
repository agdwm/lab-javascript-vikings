// Soldier
function Soldier (health, strength) {
	this.health = health;
	this.strength = strength;

	this.receiveDamage = function(damage) {
		this.health = this.health - damage;
	}
}

Soldier.prototype.attack = function() {
	return this.strength;
}

// Viking
function Viking (name, health, strength) {
	Soldier.call(this, health, strength);
	this.name = name;

	this.receiveDamage = function(damage) {
		this.health = this.health - damage;
		var message;
		if(this.health > 0) {
			message = this.name + " has received " + damage + " points of damage";
		}else{
			message = this.name + " has died in act of combat";
		}
		return message;
	}
}

var harald = new Viking('Harald', 400, 200);


Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.battleCry = function() {

}

// Saxon
function Saxon() {}

// War
function War() {}
