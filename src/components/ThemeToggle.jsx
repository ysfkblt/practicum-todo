import { useStateContext } from '../context/GlobalProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
	const { theme, setTheme } = useStateContext();

	return (
		<div
			className={`grid place-content-center transition duration-500 ease-in-out rounded-md h-[52px] w-[52px] bg-transparent shadow mr-1  dark:shadow-amber-100/10 `}
		>
			{theme === 'dark' ? (
				<SunIcon
					onClick={() =>
						setTheme(theme === 'dark' ? 'light' : 'dark')
					}
					className='text-amber-300 h-8 cursor-pointer'
				/>
			) : (
				<MoonIcon
					onClick={() =>
						setTheme(theme === 'dark' ? 'light' : 'dark')
					}
					className='text-blue-600 text h-8 cursor-pointer'
				/>
			)}
		</div>
	);
}
