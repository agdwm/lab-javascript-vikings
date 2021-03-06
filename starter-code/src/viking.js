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

War.prototype.addSaxon = function(saxon){
	this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function(){
	var saxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
	var currentSaxon = this.saxonArmy[saxonPosition];
	var currentViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

	var message = currentSaxon.receiveDamage(currentViking.strength);

	if(currentSaxon.health <= 0) {
		this.saxonArmy.splice(saxonPosition, 1);
		this.showStatus();
	}
	return message;
};

War.prototype.saxonAttack = function(){
	var vikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
	var currentViking = this.vikingArmy[vikingPosition];
	var currentSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

	var message = currentViking.receiveDamage(currentSaxon.strength);

	if(currentViking.health <= 0) {
		this.vikingArmy.splice(vikingPosition, 1);
		this.showStatus();
	}
	return message;
};

War.prototype.showStatus = function() {
	if (this.saxonArmy.length === 0) {
		return "Vikings have won the war of the century!";
	} else if(this.vikingArmy.length === 0) {
		return "Saxons have fought for their lives and survive another day...";
	} else {
		return "Vikings and Saxons are still in the thick of battle.";
	}
};