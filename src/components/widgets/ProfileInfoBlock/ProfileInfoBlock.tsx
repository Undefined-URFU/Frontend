import s from './profile-block.module.scss'
import Edit from 'assets/icons/edit.svg?react'
import { Multiselect } from 'components/ui/Multiselect/Multiselect'
import { useAtom } from 'jotai'
import { tagsAtom } from './tags.state'
import { userPreferencesApi } from 'api/userPreferences/userPreferences'
import { useEffect } from 'react'
import useHttpLoader from 'hooks/useHttpLoader/useHttpLoader'
import { ingredientTranslations } from 'constants/allergens'

type TProps = {
	setEditMode: (value: boolean) => void
}

export function ProfileInfoSection({ setEditMode }: TProps) {
	const { wait } = useHttpLoader()
	const [allergens, setAllergens] = useAtom<string[]>(tagsAtom)
	useEffect(() => {
		wait(userPreferencesApi.getPreferences(), resp => {
			if (resp.status === 'success') {
				setAllergens(resp.body.blacklist)
			}
		})
	}, [])

	const selectedAllergens = Object.entries(ingredientTranslations).filter(([key]) =>
		allergens.includes(key)
	)

	return (
		<div className={s.container}>
			<div className={s.block_name}>
				Аллергены
				<div style={{ cursor: 'pointer' }} onClick={() => setEditMode(true)}>
					<Edit />
				</div>
			</div>
			<div className={s.block}>
				{selectedAllergens.map(([key, value]) => (
					<Multiselect key={key} name={value} selected={false} />
				))}
			</div>
		</div>
	)
}
