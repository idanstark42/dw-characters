import Move from '../../../move'
import Procedure, { modifier, CONSTANT } from '../../../move_procedure'

const dwarf = new Move({
	title: 'Dwarf',
	text: 
`You are one with stone. When you commune you are also granted a special version of Words of the Unspeaking as a rote which only works on stone.`,

	procedure: new Procedure(CONSTANT, )
})

export default dwarf