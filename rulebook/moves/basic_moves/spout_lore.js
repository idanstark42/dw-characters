import Move from '../move'
import Procedure, { roll, series } from '../move_procedure'

const spoutLore = new Move({
	title: 'Spout Lore',
	text: 
`When you consult your accumulated knowledge about something, roll+Int.
* On a 10+, the GM will tell you something interesting and useful about the subject relevant to your situation.
* On a 7–9, the GM will only tell you something interesting—it’s on you to make it useful.
The GM might ask you “How do you know this?” Tell them the truth, now.`,

	procedure: new Procedure('When you consult your accumulated knowledge about something', roll('roll+Int', {
		success: series(
			'the GM will tell you something interesting and useful about the subject relevant to your situation.',
			'The GM might ask you “How do you know this?” Tell them the truth, now.'),
		partialSuccess: series(
			'the GM will only tell you something interesting — it’s on you to make it useful.',
			'The GM might ask you “How do you know this?” Tell them the truth, now.')
	}))
})

export default spoutLore