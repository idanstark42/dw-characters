import Move, { Procedure } from '../move'

const { roll, choice, modifier, effect, multipleEffects } = Procedure

const defayDanger = new Move({
	title: 'Defy Danger',
	text: 
`When you act despite an imminent threat or suffer a calamity, say how you deal with it and roll. If you do it
* by powering through, +Str
* by getting out of the way or acting fast, +Dex
* by enduring, +Con
* with quick thinking, +Int
* through mental fortitude, +Wis
* using charm and social grace, +Cha

* On a 10+, you do what you set out to, the threat doesn’t come to bear.
* On a 7–9, you stumble, hesitate, or flinch: the GM will offer you a worse outcome, hard bargain, or ugly choice.`,

	procedure: new Procedure('When you act despite an imminent threat or suffer a calamity', multipleEffects(
		choice('How do you deal with it:', {
			'By powering through': modifier('+Str'. { usages: 1 }),
			'By getting out of the way or acting fast': modifier('+Dex'. { usages: 1 }),
			'By enduring': modifier('+Con'. { usages: 1 }),
			'With quick thinking': modifier('+Int'. { usages: 1 }),
			'Through mental fortitude': modifier('+Wis'. { usages: 1 }),
			'Using charm and social grace': modifier('+Cha'. { usages: 1 })
		}),
		roll('roll', {
			success: effect('you do what you set out to, the threat doesn’t come to bear.'),
			partialSuccess: effect('you stumble, hesitate, or flinch: the GM will offer you a worse outcome, hard bargain, or ugly choice.')
		})))
})

export default defayDanger