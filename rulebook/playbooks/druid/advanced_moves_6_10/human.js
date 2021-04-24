import Move from '../../../move'
import Procedure, { modifier, CONSTANT } from '../../../move_procedure'

const human = new Move({
	title: 'Human',
	text: 
`As your people learned to bind animals to field and farm, so too are you bound to them. You may always take the shape of any domesticated animal, in addition to your normal options.`,

	procedure: new Procedure(CONSTANT, )
})

export default human