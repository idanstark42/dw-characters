import Move from '../../../move'
import Procedure, { modifier, simultaneous } from '../../../move_procedure'

const anEarForMagic = new Move({
	title: 'An Ear For Magic',
	text: 
`When you hear an enemy cast a spell the GM will tell you the name of the spell and its effects. Take +1 forward when acting on the answers.`,

	procedure: new Procedure('When you hear an enemy cast a spell', simultaneous(
		'The GM will tell you the name of the spell and its effects.',
		modifier('+1', { on: 'acting on the answers', usages: 1 })
		))
})

export default anEarForMagic