import pic1 from './../assets/images/product.png'
import pic2 from './../assets/images/product2.png'
import pic3 from './../assets/images/product3.png'
import pic5 from './../assets/images/product5.png'
import pic6 from './../assets/images/product6.png'
import pic7 from './../assets/images/product7.png'
import pic8 from './../assets/images/product8.png'
import pic9 from './../assets/images/product9.png'


export function getRandomImage() {
	const pictures = [pic1, pic2, pic3, pic5, pic6, pic7, pic8, pic9]
	const index = Math.floor(Math.random() * 8)
	return pictures[index]
}
