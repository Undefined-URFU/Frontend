import s from './product-card.module.scss'
import Star from 'assets/icons/star.svg?react'
import Review from 'assets/icons/review.svg?react'
import { getRandomImage } from 'utils/pictures.utils'

export type TProductCard = {
	productName: string
	price: number
	lovesCount: number
	rating: number
	id?: string
}

export function ProductCard({ productName, price, lovesCount, rating }: TProductCard) {
	const pic = getRandomImage()
	const formattedRating = rating.toFixed(1)

	return (
		<div className={s.card}>
			<div className={s.pic}>
				<img src={pic} alt='картинка' />
			</div>
			<div className={s.info}>
				<div className={s.price}>{price}₽</div>
				<div>{productName}</div>
				<div className={s.bottom}>
					<div className={s.rating}>
						<Star />
						{formattedRating}
					</div>
					<div className={s.reviews}>
						<Review />
						{lovesCount} отзывов
					</div>
				</div>
			</div>
		</div>
	)
}
