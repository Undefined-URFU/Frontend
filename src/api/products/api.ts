import http, { handleErrorResponse, handleHttpResponse } from 'models/http/index.ts'
import { AxiosError, AxiosResponse } from 'axios'
import { IProduct } from 'models/products/api'

const getRecommendations = async () => {
	try {
		const resp: AxiosResponse<Array<IProduct>> = await http.get('/products/recommended?amount=50')
		return handleHttpResponse(resp)
	} catch (err) {
		return handleErrorResponse(err as AxiosError)
	}
}

const getSearchResults = async (searchInput: string) => {
	try {
		const resp: AxiosResponse<Array<IProduct>> = await http.get(
			`/products?search=${encodeURIComponent(searchInput)}`
		)
		return handleHttpResponse(resp)
	} catch (err) {
		return handleErrorResponse(err as AxiosError)
	}
}

const getFavorites = async () => {
	try {
		const resp: AxiosResponse<Array<IProduct>> = await http.get('/products?liked=true')
		return handleHttpResponse(resp)
	} catch (err) {
		return handleErrorResponse(err as AxiosError)
	}
}

export const productsApi = {
	getFavorites,
	getSearchResults,
	getRecommendations
}
