import Move, { Procedure } from '../move'

const { roll, modifier } = Procedure

const castASpell = new Move({
	title: 'Cast A Spell',
	text: 
`When you unleash a spell granted to you by your deity`,

	procedure: new Procedure('When you unleash a spell granted to you by your deity', roll('roll+Wis', {
		success: '',
		partialSuccess: '',
		miss: ''
	}))
})

export default castASpell