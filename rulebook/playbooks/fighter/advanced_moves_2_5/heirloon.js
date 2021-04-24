import Move from '../../../move'
import Procedure, { roll } from '../../../move_procedure'

const heirloon = new Move({
	title: 'Heirloon',
	text: 
`When you consult the spirits that reside within your signature weapon`,

	procedure: new Procedure('When you consult the spirits that reside within your signature weapon', roll('roll+Cha', {
		success: 'The GM will give you good detail.',
		partialSuccess: 'The GM will give you an impression.',
		miss: ''
	}))
})

export default heirloon