import Delete from 'assets/icons/delete.svg?react'
import s from './multiselect.module.scss'
import cn from 'utils/cn'
import { memo } from 'react'

export type TMultiselectProps = {
	name: string
	selected: boolean
	editingMode?: boolean
	onClick?: () => void
	onClose?: () => void
}

export const Multiselect = memo(function Multiselect({
	name,
	selected,
	onClick,
	onClose,
	editingMode
}: TMultiselectProps) {
	return (
		<div
			onClick={onClick}
			style={editingMode && !selected ? { cursor: 'pointer' } : undefined}
			className={s.wrapper}
		>
			<div className={cn(s.base, selected ? s.selected : s.notSelected)}>{name}</div>
			{selected ? (
				<div
					className={s.delete}
					onClick={e => {
						e.stopPropagation()
						onClose?.()
					}}
				>
					<Delete />
				</div>
			) : null}
		</div>
	)
})
