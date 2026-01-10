import s from './search-results.module.scss'
import { useState, useEffect } from 'react'
import { ProductCard } from 'components/widgets/ProductCard/ProductCard'
import type { TProductCard } from 'components/widgets/ProductCard/ProductCard'
import { useSearchParams } from 'react-router'
import useHttpLoader from 'hooks/useHttpLoader/useHttpLoader'
import { productsApi } from 'api/products/api'

export function SearchResults() {
	const [searchParams] = useSearchParams()
	const search = searchParams.get('search')
	const { wait } = useHttpLoader()
	const [products, setProducts] = useState<TProductCard[]>([])

	useEffect(() => {
		if (!search) return
		wait(productsApi.getSearchResults(search), resp => {
			if (resp.status === 'success') {
				setProducts(resp.body.slice(0, 50))
			}
		})
	}, [search])

	return (
		<div className={s.container}>
			<div className={s.catalog}>
				{products.map(product => (
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
