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
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.battleCry = function() {
	return "Odin Owns You All!";
}


// Saxon
function Saxon(health, strength) {
	Soldier.call(this, health, strength);

	this.receiveDamage = function(damage) {
		this.health = this.health - damage;
		var message;
		if(this.health > 0) {
			message = "A Saxon has received " + damage + " points of damage";
		}else{
			message = "A Saxon has died in combat";
		}
		return message;
	}
}
Saxon.prototype = Object.create(Soldier.prototype);


// War
function War() {
	this.vikingArmy = [];
	this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
	this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(){};
War.prototype.vikingAttack = function(){};
War.prototype.saxonAttack = function(){};
War.prototype.showStatus = function(){};
