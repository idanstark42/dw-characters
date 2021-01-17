import Move from '../move'
import Procedure, { roll, choice } from '../move_procedure'

const supply = new Move({
	title: 'Supply',
	text: 
`When you go to buy something with gold on hand, if it’s something readily available in the settlement you’re in, you can buy it at market price.
If it’s something special, beyond what’s usually available here, or non-mundane, roll+Cha.
* On a 10+, you find what you’re looking for at a fair price.
* On a 7–9, you’ll have to pay more or settle for something that’s not exactly what you wanted, but close. The GM will tell you what your options are.`,

	procedure: new Procedure('When you go to buy something with gold on hand', choice('Is it something readily available in the settlement you’re in?', {
		'Yes': 'You can buy it in market price',
		'No': roll('roll+Cha', {
			success: 'You find what you’re looking for at a fair price.',
			partialSuccess: 'You’ll have to pay more or settle for something that’s not exactly what you wanted, but close. The GM will tell you what your options are.'
		})
	}))

})

export default supply