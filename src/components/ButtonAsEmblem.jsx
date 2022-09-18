import { useStateContext } from '../context/GlobalProvider';

export default function ButtonAsEmblem({
	fill,
	size,
	height,
	width,
	className,
	onToDoInputShow,
	onArrowShow,
}) {
	return (
		<svg
			onClick={() => {
				onToDoInputShow();
				onArrowShow();
			}}
			className={className}
			width={size || width || 24}
			height={size || height || 24}
			xmlns='http://www.w3.org/2000/svg'
			x='0'
			y='0'
			version='1.1'
			viewBox='0 0 82.6 86.6'
			xmlSpace='preserve'
		>
			<path
				fill={fill || '#fff'}
				d='M82.6 32.1v15.3c0 1.2-.9 2.3-2.1 2.4L56 53.3c-1.2.2-2.1 1.2-2.1 2.4l-.1 26.4c0 1.2-.9 2.3-2.1 2.4l-14.8 2.1c-.5.1-1 0-1.5-.3l-5.5-3c-.8-.4-1.3-1.3-1.3-2.2V59.8c0-1.5-1.3-2.6-2.8-2.4L8.3 59.9c-.5.1-1 0-1.5-.3l-5.5-3C.5 56.2 0 55.4 0 54.5V39.2c0-1.2.9-2.3 2.1-2.4l24.5-3.4c1.2-.2 2.1-1.2 2.1-2.4l.1-26.4c0-1.2.9-2.3 2.1-2.4L45.7 0c.5-.1 1 0 1.5.3l5.5 3c.8.4 1.3 1.2 1.3 2.1v21.3c0 1.5 1.3 2.6 2.8 2.4l17.6-2.4c.5-.1 1 0 1.5.3l5.5 3c.7.3 1.2 1.2 1.2 2.1z'
			></path>
		</svg>
	);
}
