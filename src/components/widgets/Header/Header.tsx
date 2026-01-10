import s from './header.module.scss'
import SearchInput from 'components/ui/Inputs/SearchInput/SearchInput'
import Button from 'components/ui/Buttons/Button'
import Prof from 'assets/icons/profile-header.svg?react'
import Cart from 'assets/icons/cart.svg?react'
import Notifictaions from 'assets/icons/notifications.svg?react'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'
import { useState } from 'react'

export function Header() {
	const [search, setSearch] = useState('')
	const navigate = useNavigate()

	const handleSearch = () => {
		if (!search) return
		navigate(`/search?search=${search}`)
		setSearch('')
	}

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			handleSearch()
		}
	}

	return (
		<div className={s.container}>
			<div className={s.header}>
				<div className={s.header_content}>
					<NavLink to='catalog' className={s.logo}>
						<div>GlowCare</div>
					</NavLink>
					<div className={s.searchWrapper}>
						<div>
							<SearchInput
								value={search}
								style={{ width: '495px' }}
								name='search'
								onChange={e => setSearch(e)}
								placeholder='Найти'
								onKeyDown={handleKeyPress}
							/>
						</div>
						<div>
							<Button style={{ height: '36px' }} onClick={handleSearch} theme='blue'>
								Найти
							</Button>
						</div>
					</div>
					<div className={s.iconsWrapper}>
						<Cart />
						<Notifictaions />
						<NavLink to='/profile/info'>
							<Prof />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}
