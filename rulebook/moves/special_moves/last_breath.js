import Move from '../move'
import Procedure, { choice, changeStat, die, simultaneous, series, STATS } from '../move_procedure'

const lastBreath = new Move({
	title: 'Last Breath',
	text: 
`When you’re dying you catch a glimpse of what lies beyond the Black Gates of Death’s Kingdom (the GM will describe it).
Then roll (just roll, +nothing — yeah, Death doesn’t care how tough or cool you are).
* On a 10+, you’ve cheated Death — you’re in a bad spot but you’re still alive.
* On a 7–9, Death himself will offer you a bargain. Take it and stabilize or refuse and pass beyond the Black Gates into whatever fate awaits you.
* On 6-, your fate is sealed. You’re marked as Death’s own and you’ll cross the threshold soon. The GM will tell you when.`,

	procedure: new Procedure('hp = 0', series(
			'You catch a glimpse of what lies beyond the Black Gates of Death’s Kingdom (the GM will describe it).',
			roll('roll', {
				success: simultaneous(changeStat(STATS.HP, 1), 'You’ve cheated Death — you’re in a bad spot but you’re still alive.'),
				partialSuccess: choice('Death himself will offer you a bargain. Take it and stabilize or refuse and pass beyond the Black Gates into whatever fate awaits you.', {
					'Take Death’s bargain': changeStat(STATS.HP, 1),
					'Don’t take Death’s bargain': simultaneous(die(), 'Pass beyond the Black Gates into whatever fate awaits you.')
				}),
				miss: simultaneous('Your fate is sealed. You’re marked as Death’s own and you’ll cross the threshold soon. The GM will tell you when.', die())
			})
		))
})

export default lastBreath