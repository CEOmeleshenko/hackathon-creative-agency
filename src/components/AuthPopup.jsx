import React, { useState } from 'react';
import Modal from './Modal';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../utils/api';
import { userProfile } from '../stores/profile.store';


const AuthPopup = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isOpen, setIsOpen] = useState(false);
	const setUser = userProfile((state) => state.setUser)
	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await api.login(email, password);
			setUser(response)
			navigate('/profile');
			handleClose();
			console.log(response)
		} catch (error) {
			console.error(error);
		}
	};


	return (
		<div>
			<button
				className="bg-red-500 text-white ext-white px-4 py-2 rounded"
				onClick={handleOpen}
			>
				Войти
			</button>
			<Modal isOpen={isOpen} onClose={handleClose} className="bg-white p-8 rounded-lg shadow-md">
				<div>
					<h2 className="text-2xl font-bold mb-6 text-center">Вход в аккаунт</h2>
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-700">
								<i className="fas fa-envelope mr-2"></i>Email
							</label>
							<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Email" />
						</div>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-700">
								<i className="fas fa-lock mr-2"></i>Пароль
							</label>
							<div className="relative">
								<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="*********" />
							</div>
						</div>
						<button type="submit" className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold">Войти</button>
					</form>
					<div className="my-6 flex items-center">
						<hr className="flex-grow border-gray-300" />
					</div>
					<div className="text-center text-sm text-gray-500">
						Ещё нет аккаунта? <Link to={'/regiser'} className="mr-4 text-blue-500">Зарегестрироваться</Link>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default AuthPopup;