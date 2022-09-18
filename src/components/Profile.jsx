import { useStateContext } from '../context/GlobalProvider';

export default function Profile() {
	const { profileData } = useStateContext();

	return (
		<div className='flex max-w-[8rem] sm:max-w-[12rem] bg-transparent shadow dark:shadow-amber-100/10 rounded-md h-[52px] px-1 items-center select-none'>
			<img
				className='h-8 sm:h-11'
				src='/person.png'
				alt='profile photo'
			/>
			<p className='sm:text-xl text-base font-medium pr-1 truncate'>
				{profileData}
			</p>
		</div>
	);
}
