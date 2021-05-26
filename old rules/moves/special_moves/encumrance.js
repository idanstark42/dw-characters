import Move from '../move'
import Procedure, { CONSTANT, condition, modifier } from '../move_procedure'

const encumrance = new Move({
	title: 'Encumrance',
	text: 
`When you make a move while carrying weight you may be encumbered. If your weight carried is:

* Equal to or less than your load, you suffer no penalty
* Less than or equal to your load+2, you take -1 ongoing until you lighten your burden
* Greater than your load+2, you have a choice: drop at least 1 weight and roll at -1, or automatically fail`,

	procedure: new Procedure('wieght > load',
		condition('weight > load + 2',
			modifier('autofail', { ongoing: 'until you lighten your burden' }),
			modifier('-1', { forced: true, ongoing: 'until you lighten your burden' }))
		)
})

export default encumrance