import Move from '../../../move'
import Procedure, { choice, modifier } from '../../../move_procedure'

const formcrafter = new Move({
	title: 'Formcrafter',
	text: 
`When you shapeshift choose a stat: you take +1 ongoing to rolls using that stat while shifted. The GM will choose a stat, too: you take -1 ongoing to rolls using that stat while shifted.`,

	procedure: new Procedure('', )
})

export default formcrafter