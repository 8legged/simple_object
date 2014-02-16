exports.Card = function(suit, rank) {

	var constructor = function() { };
	constructor.prototype.getSuit = function() { return suit; };
	constructor.prototype.getRank = function() { return rank; };
	return new constructor();

}