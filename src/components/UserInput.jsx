import { useStateContext } from '../context/GlobalProvider';
import ButtonAsEmblem from './ButtonAsEmblem';

export default function UserInput() {
	const { userName, setUserName, onProfileData } = useStateContext();

	return (
		<section className='w-screen h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-transparent backdrop-blur-lg z-10'>
			<form
				onSubmit={onProfileData}
				spellCheck='false'
				className='flex items-end pb-44 justify-center h-screen gap-4'
			>
				<label className='flex'>
					<input
						onChange={(e) => setUserName(e.target.value)}
						type='text'
						value={userName}
						className='focus:outline-none bg-transparent  text-xl mt-0 block w-64 px-2 border-0 border-b-2 border-neutral-200/40 focus:ring-0 focus:border-amber-100 caret-amber-100 dark:placeholder:text-neutral-400 placeholder:text-neutral-500 placeholder:text-lg placeholder:italic'
						placeholder='please enter your username'
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) =>
							(e.target.placeholder =
								'please enter your username')
						}
					/>
				</label>
				<button
					disabled={userName.length < 1}
					type='submit'
					className='flex rounded-full -mx-2 mb-1 dark:disabled:opacity-40 disabled:opacity-70'
				>
					<ButtonAsEmblem size={36} fill='#fde047' />
				</button>
			</form>
		</section>
	);
}
