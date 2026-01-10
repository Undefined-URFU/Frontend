import { ProductCard } from './../../widgets/ProductCard/ProductCard'
import s from './catalog.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import type { TProductCard } from './../../widgets/ProductCard/ProductCard'
import useHttpLoader from 'hooks/useHttpLoader/useHttpLoader'
import { productsApi } from 'api/products/api'

function Catalog() {
	const { wait } = useHttpLoader()
	const [products, setProducts] = useState<TProductCard[]>()
	useEffect(() => {
		wait(productsApi.getRecommendations(), resp => {
			if (resp.status === 'success') {
				setProducts(resp.body)
			}
		})
	}, [])

	return (
		<div className={s.container}>
			<div className={s.catalog}>
				{products?.map(product => (
					<ProductCard
						key={product.id}
						productName={product.productName}
						price={product.price}
						rating={product.rating}
						lovesCount={product.lovesCount}
					/>
				))}
			</div>
		</div>
	)
}

export default Catalog
