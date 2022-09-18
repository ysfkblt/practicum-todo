import { useEffect } from 'react';
import ButtonAsEmblem from './components/ButtonAsEmblem';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';
import ToDoCard from './components/ToDoCard';
import ToDoInput from './components/ToDoInput';
import UserInput from './components/UserInput';
import { useStateContext } from './context/GlobalProvider';

export default function App() {
	const {
		userInputShow,
		profileDataHandler,
		profileData,
		showProfile,
		toDoInputShow,
		setToDoInputShow,
		data,
		getData,
		setArrowShow,
		arrowShow,
		updateShow,
	} = useStateContext();

	useEffect(() => {
		profileDataHandler();
		getData();
	}, []);

	return (
		<main
			className={`m-0 p-0 block bg-neutral-400 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200  min-h-screen`}
		>
			{data.length === 0 && arrowShow && (
				<img
					className='sm:h-12 h-6 absolute  top-[32%] left-[58%] sm:top-[29%] sm:left-[53%]'
					src='/click_here.svg'
				/>
			)}
			<section
				className={`flex gap-2 mt-2  z-50 absolute top-0 ${
					!profileData ? 'right-0' : ''
				} -right-4 scale-75`}
			>
				<ThemeToggle />
				{showProfile && profileData && <Profile />}
			</section>
			<article className='flex flex-col items-center'>
				<section className='mt-[34vh] cursor-pointer'>
					<ButtonAsEmblem
						onToDoInputShow={() => setToDoInputShow(true)}
						onArrowShow={() => setArrowShow(false)}
						size={160}
						fill='#fbbf24'
					/>
					{userInputShow && !profileData && <UserInput />}
				</section>

				<section className='my-10 w-[60vw] flex items-center flex-col'>
					{data
						.slice(0)
						.reverse()
						.map((data) => {
							return <ToDoCard key={data.id} data={data} />;
						})}
				</section>

				{toDoInputShow && <ToDoInput />}
				{updateShow && <ToDoInput />}
			</article>
		</main>
	);
}
