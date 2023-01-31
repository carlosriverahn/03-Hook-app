import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
	const { counter, increment } = useCounter(10);

	const [show, setshow] = useState(true);

	return (
		<>
			<h1>
				<Small value={counter} />
			</h1>
			<hr />

			<button className="btn btn-primary" onClick={() => increment()}>
				<p>+1</p>
			</button>

			<button className="btn btn-primary" onClick={() => setshow(!show)}>
				<p>Show/Hide {JSON.stringify(show)}</p>
			</button>
		</>
	);
};
