import Move from '../../../move'
import Procedure, { modifier, CONSTANT } from '../../../move_procedure'

const byNatureSustained = new Move({
	title: 'By Nature Sustained',
	text: 
`You don’t need to eat or drink. If a move tells you to mark off a ration just ignore it.`,

	procedure: new Procedure(CONSTANT, )
})

export default byNatureSustained