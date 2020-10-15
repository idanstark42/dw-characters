import Move, { Procedure } from '../move'

const { modifier, multipleEffects } = Procedure

const quickStudy = new Move({
	title: 'Quick Study',
	text: 
`When you see the effects of an arcane spell, ask the GM the name of the spell and its effects. You take +1 when acting on the answers.`,

	procedure: new Procedure('When you see the effects of an arcane spell', Ask the GM the name of the spell and its effects.)
})

export default quickStudy