import { useEffect } from 'react';
import { useStateContext } from '../context/GlobalProvider';

export default function ToDoInput() {
	const {
		setContent,
		setTitle,
		postData,
		content,
		title,
		onCancel,
		updateData,
		updateShow,
		putData,
		setOk,
		ok,
	} = useStateContext();

	useEffect(() => {
		if (updateShow) {
			setContent(updateData.content);
			setTitle(updateData.title);
			setOk(updateData.isCompleted);
		}
	}, []);

	const postDisabled =
		content.replace(/\s+/g, '').length < 3 || title.trim().length === 0;

	return (
		<section className='w-screen fixed min-h-full z-40 grid place-content-center bg-transparent backdrop-blur-lg'>
			<form
				onSubmit={updateShow ? putData : postData}
				spellCheck='false'
				className=' '
			>
				<label className='flex flex-col  bg-neutral-50/5 shadow dark:shadow-amber-100/10 rounded-md '>
					<input
						value={updateShow ? title : undefined}
						onChange={(e) => setTitle(e.target.value)}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Title')}
						className='bg-transparent pt-2 pl-3 text-lg focus:border-neutral-800/5
						block border-0 border-b border-neutral-800/5 dark:border-neutral-200/5
						focus:ring-0 placeholder:font-medium dark:placeholder:text-neutral-400/40
						placeholder:text-neutral-600/40 caret-amber-200'
						placeholder='Title'
						type='text'
					/>
					<textarea
						value={updateShow ? content : undefined}
						onChange={(e) => {
							setContent(e.target.value);
						}}
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Text')}
						placeholder='Text'
						className='mx-1
						dark:placeholder:text-neutral-400/50
						placeholder:text-neutral-600/50
						bg-transparent text-base caret-amber-200
						block
						border-0 
						focus:ring-0
						resize-none'
						rows='6'
					></textarea>
					<div
						className={`flex justify-end text-xs pb-2 ${
							updateShow ? 'justify-between' : ''
						}`}
					>
						{updateShow && (
							<div
								className={`flex flex-row-reverse opacity-100 dark:opacity-60 -pr-2 gap-1 px-2 ${
									ok ? 'opacity-30' : ''
								} `}
							>
								<p className='text-xs'>
									{!ok ? 'Completed?' : 'Complete'}
								</p>

								<label className='inline-flex items-center space-x-4 scale-75 cursor-pointer text-gray-100'>
									<span className='relative'>
										<input
											onChange={() => {
												setOk((p) => !p);
											}}
											defaultChecked={ok && 'checked'}
											type='checkbox'
											className='hidden peer'
										/>
										<div className='w-10 h-4 rounded-full shadow bg-amber-300/20 peer-checked:bg-neutral-500/20'></div>
										<div
											className={`absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto ${
												!ok ? 'bg-neutral-400/90' : ''
											} bg-amber-400`}
										></div>
									</span>
								</label>
							</div>
						)}
						<div className='flex gap-1 pr-2'>
							<button
								onClick={onCancel}
								className='hover:text-red-600 dark:hover:text-red-600 dark:text-neutral-400 text-neutral-600 opacity-60 hover:opacity-100'
								type='button'
							>
								Cancel
							</button>
							<button
								disabled={postDisabled}
								onClick={updateShow ? putData : postData}
								type='submit'
								className='dark:text-amber-400 text-yellow-300 disabled:opacity-40 disabled:text-red-600/50 dark:disabled:text-red-600/50'
							>
								Done
							</button>
						</div>
					</div>
				</label>
			</form>
		</section>
	);
}
