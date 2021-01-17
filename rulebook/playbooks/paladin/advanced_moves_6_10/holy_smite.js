import Move from '../../../move'
import smite from '../advanced_moves_2_5/smite'

import Procedure, { modifier, condition, CONSTANT } from '../../../move_procedure'

const holySmite = new Move({
	title: 'Holy Smite',
	text: 
`While on a quest you deal +1d8 damage.`,

	procedure: new Procedure(CONSTANT, ),

    replaces: smite
})

export default holySmite