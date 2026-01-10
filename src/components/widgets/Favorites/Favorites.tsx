import { ProductCard } from './../ProductCard/ProductCard'
import s from './favorites.module.scss'
import { useState, useEffect } from 'react'
import useHttpLoader from 'hooks/useHttpLoader/useHttpLoader'
import { productsApi } from 'api/products/api'
import type { TProductCard } from './../../widgets/ProductCard/ProductCard'

export function Favorites() {
	const { wait } = useHttpLoader()
	const [favorites, setfavorites] = useState<TProductCard[]>([])

	useEffect(() => {
		wait(productsApi.getFavorites(), resp => {
			if (resp.status === 'success') {
				setfavorites(resp.body)
			}
		})
	}, [])

	return (
		<>
			<div className={s.favorites}>
				{favorites.length ? (
					favorites.map(el => (
						<ProductCard
							key={el.productName}
							productName={el.productName}
							price={el.price}
							rating={el.rating}
							lovesCount={el.lovesCount}
						/>
					))
				) : (
					<div
						style={{
							display: 'flex',
							width: '1029px',
							height: '100vh',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						Ничего не найдено
					</div>
				)}
			</div>
		</>
	)
}
