//"require" from Node library
var expect = require('chai').expect,
	Card = require('../lib/card').Card;

//from Chai library
describe('Card object tests', function() {
	var card;

	beforeEach(function() {
		card = new Card("Hearts", "Q");
	});

	describe('constructor', function() {
		it('card should be truthy (exists)', function() {
			expect(card).to.be.ok;
		});
	/*	
		it('card should have a suit', function() {
			expect(card).to.have.property('suit');
		});

		it('card should be from the Hearts suit', function() {
			expect(card.suit).to.equal('Hearts');
		});

		it('card should have a rank', function() {
			expect(card).to.have.property('rank');
		});

		it('card should have a rank of Q', function() {
			expect(card.rank).to.equal('Q');
		});
	*/
		it('card should have getSuit', function() {
			expect(card).to.have.property('getSuit');
		});

		it('card should have getRank', function() {
			expect(card).to.have.property('getRank');
		});

		it('card should not be mutable', function() {
			card.suit = 'Spades';
			expect(card.getSuit()).to.not.equal('Spades');
		});

	});
});