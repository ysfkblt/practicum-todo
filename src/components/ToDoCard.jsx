import { useStateContext } from '../context/GlobalProvider';
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function ({ data }) {
	const { onDelete, onUpdate } = useStateContext();

	return (
		<div
			className={`block mb-3 dark:text-neutral-400 text-neutral-700/90 rounded-md  w-72 sm:w-96  bg-neutral-50/5 shadow-md dark:shadow-neutral-100/10 border 
			border-neutral-100/10 dark:border-neutral-300/5
		${data.isCompleted === true ? 'opacity-40 ' : ''}
		`}
		>
			<div className='flex flex-col'>
				<p
					className={`${
						data.isCompleted ? 'line-through' : ''
					} pt-2 pl-3 truncate text-lg font-medium`}
				>
					{data.title}
				</p>
				<p
					className={`${
						data.isCompleted ? 'line-through' : ''
					} px-1 py-1 truncate   indent-3`}
				>
					{data.content}
				</p>
			</div>
			<div className='flex my-2 items-center justify-end'>
				<div className=''>
					<button
						onClick={() => {
							onDelete(data.id);
						}}
						type='button'
					>
						<TrashIcon className='h-5 pr-2 cursor-pointer text-red-600/80 inline-flex self-end transform transition ease-in-out duration-100 opacity-40 hover:opacity-100 hover:scale-125' />
					</button>
					<button
						onClick={() => {
							onUpdate(data);
						}}
						type='button'
					>
						<EyeIcon className='h-6 pr-3 cursor-pointer text-amber-400 inline-flex self-end transform transition ease-in-out duration-100 opacity-40 hover:opacity-100 hover:scale-125' />
					</button>
				</div>
			</div>
		</div>
	);
}
