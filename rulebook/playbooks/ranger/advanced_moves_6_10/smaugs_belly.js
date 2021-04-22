import Move from '../../../move'
import Procedure, { modifier } from '../../../move_procedure'

const smaugsBelly = new Move({
	title: 'Smaugs Belly',
	text: 
`When you know your target’s weakest point your arrows have 2 piercing.`,

	procedure: new Procedure('When you know your target’s weakest point', )
})

export default smaugsBelly