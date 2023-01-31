import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {
	const { counter, increment, decrement, reset } = useCounter(100);

	return (
		<>
			<h1>
				<span>Counter with custom hook:</span> {counter}
			</h1>
			<hr />
			<button className="btn btn-primary" onClick={() => decrement(2)}>
				-1
			</button>
			<button className="btn btn-primary" onClick={() => increment(2)}>
				+1
			</button>
			<button className="btn btn-primary" onClick={reset}>
				reset
			</button>
		</>
	);
};
export default CounterCustomHook;
