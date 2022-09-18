import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

const StateContext = createContext();

const getDefaultTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('color-theme');
		if (typeof storedPrefs === 'string') {
			return storedPrefs;
		}

		const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
		if (userMedia.matches) {
			return 'dark';
		}
	}

	return 'light';
};

export default function GlobalProvider({ children, defaultTheme }) {
	const [theme, setTheme] = useState(getDefaultTheme);
	const [userName, setUserName] = useState('');
	const [userInputShow, setUserInputShow] = useState(true);
	const [profileData, setProfileData] = useState('');
	const [showProfile, setShowProfile] = useState(true);
	const [toDoInputShow, setToDoInputShow] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [ok, setOk] = useState(false);
	const [data, setData] = useState([]);
	const [arrowShow, setArrowShow] = useState(true);
	const [updateShow, setUpdateShow] = useState(false);
	const [updateData, setUpdateData] = useState();

	const rawSetTheme = (rawTheme) => {
		const root = window.document.documentElement;
		const isDark = rawTheme === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(rawTheme);

		localStorage.setItem('color-theme', rawTheme);
	};

	if (defaultTheme) {
		rawSetTheme(defaultTheme);
	}

	useEffect(() => {
		rawSetTheme(theme);
	}, [theme]);

	const userNameDataHandler = () => {
		localStorage.setItem('User Name', userName);
	};

	const profileDataHandler = () => {
		setProfileData(localStorage.getItem('User Name'));
		setShowProfile(true);
	};

	const onProfileData = (e) => {
		e.preventDefault();

		userNameDataHandler();
		profileDataHandler();
		setUserInputShow(false);
	};

	const onCancel = () => {
		setContent('');
		setTitle('');
		setToDoInputShow(false);
		setUpdateShow(false);
	};

	const postData = (e) => {
		e.preventDefault();

		if (
			content.replace(/\s+/g, '').length < 3 ||
			title.trim().length === 0
		) {
			return;
		}

		axios
			.post(`https://6319bf358e51a64d2beb564e.mockapi.io/todos`, {
				title,
				content,
			})
			.then(() => {
				getData();
			});

		setContent('');
		setTitle('');
		setToDoInputShow(false);
	};

	async function getData() {
		const rs = await axios.get(
			`https://6319bf358e51a64d2beb564e.mockapi.io/todos`
		);
		setData(rs.data);
	}

	const onDelete = (id) => {
		axios
			.delete(`https://6319bf358e51a64d2beb564e.mockapi.io/todos/${id}`)
			.then(() => {
				getData();
			});
	};

	const onUpdate = (data) => {
		setUpdateShow(true);
		setUpdateData(data);
		console.log(updateData);
	};

	const putData = (e) => {
		e.preventDefault();

		let { id } = updateData;

		if (
			content.replace(/\s+/g, '').length < 3 ||
			title.trim().length === 0
		) {
			return;
		}

		axios
			.put(`https://6319bf358e51a64d2beb564e.mockapi.io/todos/${id}`, {
				title,
				content,
				isCompleted: ok,
			})
			.then(() => {
				getData();
			});

		setUpdateShow(false);
	};

	const changeHandler = () => {
		setOk((p) => !p);
	};

	const completeData = (data) => {
		let { id } = data;

		axios
			.put(`https://6319bf358e51a64d2beb564e.mockapi.io/todos/${id}`, {
				isCompleted: ok,
			})
			.then(() => {
				getData();
			});
	};

	return (
		<StateContext.Provider
			value={{
				userName,
				setUserName,
				onProfileData,
				userInputShow,
				profileDataHandler,
				profileData,
				showProfile,
				theme,
				setTheme,
				toDoInputShow,
				setToDoInputShow,
				title,
				setTitle,
				content,
				setContent,
				postData,
				getData,
				data,
				setData,
				onDelete,
				onCancel,
				arrowShow,
				setArrowShow,
				onUpdate,
				updateShow,
				updateData,
				setUpdateData,
				putData,
				completeData,
				ok,
				setOk,
				changeHandler,
			}}
		>
			{children}
		</StateContext.Provider>
	);
}

export const useStateContext = () => useContext(StateContext);
