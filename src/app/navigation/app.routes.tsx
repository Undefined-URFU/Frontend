import { urls } from './app.urls.ts'
import { lazy } from 'react'
import { SearchResults } from 'components/pages/SearchResults/SearchResults.tsx'
import { Profile } from 'components/pages/Profile/Profile.tsx'
import { ProfileInfo } from 'components/widgets/ProfileInfo/ProfileInfo.tsx'
import { Favorites } from 'components/widgets/Favorites/Favorites.tsx'

const Catalog = lazy(() => import('components/pages/Catalog/Catalog.tsx'))

export const appRoutes = [
	{
		path: urls.catalog,
		element: <Catalog />
	},
	{
		path: urls.search,
		element: <SearchResults />
	},
	{
		path: urls.profile,
		element: <Profile />,
		children: [
			{ path: 'orders', element: <Favorites /> },
			{ path: 'favorites', element: <Favorites /> },
			{ path: 'info', element: <ProfileInfo /> }
		]
	}
]
