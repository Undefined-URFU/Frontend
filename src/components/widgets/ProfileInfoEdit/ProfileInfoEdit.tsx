import SearchInput from 'components/ui/Inputs/SearchInput/SearchInput'
import s from './profile-info-edit.module.scss'
import { Multiselect } from 'components/ui/Multiselect/Multiselect'
import { useState, FormEvent, useMemo } from 'react'
import Button from 'components/ui/Buttons/Button'
import { useAtom } from 'jotai'
import { tagsAtom } from './../ProfileInfoBlock/tags.state'
import { ingredientTranslations } from 'constants/allergens'
import useHttpLoader from 'hooks/useHttpLoader/useHttpLoader'
import { userPreferencesApi } from 'api/userPreferences/userPreferences'

type TProps = {
	setEditMode: (value: boolean) => void
}

export function ProfileInfoEdit({ setEditMode }: TProps) {
	const { wait } = useHttpLoader()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = {
			skinType: 'Dry',
			blacklist: draftAllergens
		}

		wait(userPreferencesApi.createPreferences(data), resp => {
			if (resp.status === 'success') {
				setSelectedAllergens(draftAllergens)
				setEditMode(false)
			}
		})
	}

	const [selectedAllergens, setSelectedAllergens] = useAtom(tagsAtom)
	const [draftAllergens, setDraftAllergens] = useState<string[]>(selectedAllergens)

	const addDraftAllergen = (tag: string) => {
		setDraftAllergens(prev => [...prev, tag])
	}

	const removeDraftAllergen = (tag: string) => {
		setDraftAllergens(prev => prev.filter(t => t !== tag))
	}

	const [search, setSearch] = useState('')

	const selectedAllergensData = useMemo(() => {
		return Object.fromEntries(
			Object.entries(ingredientTranslations).filter(([key]) => draftAllergens.includes(key))
		)
	}, [ingredientTranslations, draftAllergens])

	const notSelectedAllergensData = useMemo(() => {
		return Object.fromEntries(
			Object.entries(ingredientTranslations).filter(([key]) => !draftAllergens.includes(key))
		)
	}, [ingredientTranslations, draftAllergens])

	const notselectedAllergensResult = Object.entries(notSelectedAllergensData).filter(([, value]) =>
		value.toLowerCase().includes(search.toLowerCase())
	)
	const selectedAllergensResult = Object.entries(selectedAllergensData).filter(([, value]) =>
		value.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<form onSubmit={handleSubmit}>
			<div className={s.title}>
				<p>На что у вас есть аллергия?</p>
			</div>
			<SearchInput placeholder='Аллерген...' name={'scdsc'} onChange={e => setSearch(e)} />
			<div className={s.wrapper}>
				{selectedAllergensResult.map(([key, value]) => (
					<Multiselect key={key} name={value} selected onClose={() => removeDraftAllergen(key)} />
				))}
				{notselectedAllergensResult.map(([key, value]) => (
					<Multiselect
						editingMode
						key={key}
						name={value}
						selected={false}
						onClick={() => addDraftAllergen(key)}
					/>
				))}
			</div>
			<div className={s.actions}>
				<Button theme='blue' onClick={() => setEditMode(false)}>
					Назад
				</Button>
				<Button type='submit' theme='primary'>
					Сохранить
				</Button>
			</div>
		</form>
	)
}
