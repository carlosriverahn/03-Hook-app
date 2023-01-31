import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const interationNumber = (iteration = 5000) => {
	for (let i = 0; i < iteration; i++) {
		console.log('Lets go...');
	}

	return `${iteration} iteration complete`;
};

export const MemoHook = () => {
	const { counter, increment } = useCounter(5000);

	const [show, setshow] = useState(true);

	const memorize = useMemo(() => interationNumber(counter), [counter]);

	return (
		<>
			<h1>
				<small>{counter}</small>
			</h1>
			<hr />

			<p>{memorize}</p>

			<button className="btn btn-primary" onClick={() => increment()}>
				<p>+1</p>
			</button>

			<button className="btn btn-primary" onClick={() => setshow(!show)}>
				<p>Show/Hide {JSON.stringify(show)}</p>
			</button>
		</>
	);
};
