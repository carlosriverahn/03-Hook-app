import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const SimpleFormWithCustomHook = () => {
	const form = {
		username: '',
		email: '',
		password: '',
	};

	const { formState, onInputChange, onResetForm } = useForm(form);

	const { username, email, password } = formState;

	return (
		<>
			<h1>SimpleForm</h1>
			<hr />

			<input
				type="text"
				className="form-control mt-2"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputChange}
			/>

			<input
				type="text"
				className="form-control mt-2"
				placeholder="Email"
				name="email"
				value={email}
				onChange={onInputChange}
			/>

			<input
				type="text"
				className="form-control mt-2"
				placeholder="Password"
				name="password"
				value={password}
				onChange={onInputChange}
			/>

			<button onClick={onResetForm} className="btn btn-primary mt-2">Reset Form</button>
		</>
	);
};
