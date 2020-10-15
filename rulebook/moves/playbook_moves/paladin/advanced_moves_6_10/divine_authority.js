import Move, { Procedure } from '../move'
import voiceOfAuthority from '../advanced_moves_2_5/voice_of_authority'

const { modifier, condition, CONSTANT } = Procedure

const divineAuthority = new Move({
	title: 'Divine Authority',
	text: 
`Take +1 to order hirelings. When you roll a 12+ the hireling transcends their moment of fear and doubt and carries out your order with particular effectiveness or efficiency.`,

	procedure: new Procedure(CONSTANT, ),

    replaces: voiceOfAuthority
})

export default divineAuthority