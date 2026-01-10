import { ProfileInfoEdit } from '../ProfileInfoEdit/ProfileInfoEdit'
import { useState } from 'react'
import { ProfileInfoSection } from '../ProfileInfoBlock/ProfileInfoBlock'

export function ProfileInfo() {
	const [editMode, setEditMode] = useState(false)

	return (
		<>
			{editMode ? (
				<ProfileInfoEdit setEditMode={setEditMode} />
			) : (
				<ProfileInfoSection setEditMode={setEditMode} />
			)}
		</>
	)
}
