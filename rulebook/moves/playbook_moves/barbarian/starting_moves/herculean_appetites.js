import Move, { Procedure } from '../move'

const { modifier, condition, NO_EFFECT } = Procedure

const herculeanAppetites = new Move({
	title: 'Herculean Appetites',
	text: 
`Others may content themselves with just a taste of wine, or dominion over a servant or two, but you want more. Choose two appetites.
While pursuing one of your appetites if you would roll for a move, instead of rolling 2d6 you roll 1d6+1d8. If the d6 is the higher die of the pair, the GM will also introduce a complication or danger that comes about due to your heedless pursuits.

* Pure destruction
* Power over others
* Mortal pleasures
* Conquest
* Riches and property
* Fame and glory`,

	procedure: new Procedure('While pursuing one of your appetites',
		modifier('-1d6 +1d8', {
			on: 'classic roll',
			usages: 1,
			forced: true,
			additionalEffect: condition('last d6 > last d8', 'The GM will introduce a complication or danger that comes about due to your heedless pursuits.', NO_EFFECT) }))
})

export default herculeanAppetites