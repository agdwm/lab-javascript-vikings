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
	}

	return message;
};

War.prototype.showStatus = function(){};

var war1 = new War();

var harald = new Viking('Harld', 400, 50);
var drakar = new Viking('Drakar', 400, 50);

var sason = new Saxon(100, 50);
var weak = new Saxon(100, 100);

war1.addViking(harald);
war1.addViking(drakar);

war1.addSaxon(sason);
war1.addSaxon(weak);

war1.vikingAttack();