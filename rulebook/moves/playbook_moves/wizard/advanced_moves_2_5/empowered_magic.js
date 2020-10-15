import Move, { Procedure } from '../move'

const { choice, modifier } = Procedure

const empoweredMagic = new Move({
	title: 'Empowered Magic',
	text: 
`When you cast a spell, on a 10+ you have the option of choosing from the 7-9 list`,

	procedure: new Procedure('When you cast a spell, on a 10+ you have the option of choosing from the 7-9 list', )
})

export default empoweredMagic