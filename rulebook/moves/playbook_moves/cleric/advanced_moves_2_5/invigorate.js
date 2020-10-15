import Move, { Procedure } from '../move'

const { CONSTANT } = Procedure

const invigorate = new Move({
	title: 'Invigorate',
	text: 
`When you heal someone they take +2 forward to their damage.`,

	procedure: new Procedure(CONSTANT, When you heal someone they take +2 forward to their damage.)
})

export default invigorate