import Move from '../../../move'
import Procedure, { modifier, CONSTANT } from '../../../move_procedure'

const devious = new Move({
	title: 'Devious',
	text: 
`When you use charming and open you may also ask “How are you vulnerable to me?” Your subject may not ask this question of you.`,

	procedure: new Procedure(CONSTANT, modifier('choice += "How are you vulnerable to me?"', { on: 'charming and open' }))
})

export default devious