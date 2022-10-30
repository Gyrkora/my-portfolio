import imageList from '../data'

export const getImgs = new Promise((resolve, reject) => {
	let condition = true
	if (condition) {
		resolve(imageList)
	} else {
		reject('Espere un momento')
	}
})
