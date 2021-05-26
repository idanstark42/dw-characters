import Move from '../../../move'
import bamboozle from '../advanced_moves_2_5/bamboozle'

import Procedure, { modifier, simultaneous, CONSTANT } from '../../../move_procedure'

const con = new Move({
	title: 'Con',
	text: 
`When you parley with someone, on a 7+ you also take +1 forward with them and get to ask their player one question which they must answer truthfully.`,

	procedure: new Procedure(CONSTANT, simultaneous(
		modifier('+1', { on: 'after parley partial success', usages: 1, forced: true }),
		'You get to ask their player one question which they must answer truthfully')

    replaces: bamboozle
})

export default con