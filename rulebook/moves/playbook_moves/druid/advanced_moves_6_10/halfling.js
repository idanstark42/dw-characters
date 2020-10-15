import Move, { Procedure } from '../move'

const { roll } = Procedure

const halfling = new Move({
	title: 'Halfling',
	text: 
`You sing the healing songs of spring and brook. When you make camp, you and your allies heal +1d6.`,

	procedure: new Procedure('When you make camp', )
})

export default halfling