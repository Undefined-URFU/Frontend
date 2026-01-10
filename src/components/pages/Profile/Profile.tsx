import s from './profile.module.scss'
import Profilepic from 'assets/icons/profile.svg?react'
import ProfileInfo from 'assets/icons/prof1.svg?react'
import Favorites from 'assets/icons/prof2.svg?react'
import Orders from 'assets/icons/orders.svg?react'
import Exit from 'assets/icons/exit.svg?react'
import Button from './../../ui/Buttons/Button'
import { Outlet, NavLink } from 'react-router'

export function Profile() {
	const tabs = [
		{ to: 'info', icon: <ProfileInfo />, label: 'Профиль' },
		{ to: 'favorites', icon: <Favorites />, label: 'Избранное' },
		{ to: 'orders', icon: <Orders />, label: 'Заказы' }
	]

	return (
		<div className={s.container}>
			<div className={s.profile}>
				<div className={s.left_panel}>
					<div className={s.profileInfo}>
						<Profilepic />
						<div style={{ marginTop: '10px' }}>Профиль</div>
						<Button className={s.button} style={{ margin: '10px 0 30px' }} theme='blue'>
							Редактировать
						</Button>
						<div>
							{tabs.map(tab => (
								<NavLink
									key={tab.to}
									to={tab.to}
									className={({ isActive }) => (isActive ? s.active : s.tab)}
								>
									<div className={s.tabIcon}>{tab.icon}</div>
									<div>{tab.label}</div>
								</NavLink>
							))}
						</div>
					</div>
					<div>
						<Button className={s.button} theme='blue'>
							<Exit />
							Выход
						</Button>
					</div>
				</div>
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
