import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './components/Loading';
import { Character } from './components/Character';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter();

	const url = `https://thronesapi.com/api/v2/Characters/${counter}`;

	const { data, isLoading, hasError } = useFetch(url);

	// const { fullName, title } = !!data && data;

	// console.log({ data, isLoading, hasError });

	return (
		<>
			<h1>Game of Thrones</h1>
			<hr />
			{isLoading ? <Loading /> : <Character data={data} />}

			<button className='btn btn-danger' onClick={() => increment()}>next</button>
		</>
	);
};
