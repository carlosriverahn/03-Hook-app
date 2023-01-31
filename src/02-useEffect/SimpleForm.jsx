import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'Carlos',
		email: 'crivera@test.com',
	});
    
    const { username, email } = formState;
    
	const onInputChange = ({ target }) => {
        const { value, name } = target;
		setFormState({ ...formState, [name]: value });
		console.log(target.value);
	};
    

    useEffect(() => {
    // console.log('email changed')
    }, [email])
    
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
		
            {
                (username === 'Carlos2' && <Message/>)
            }
        </>
	);
};
