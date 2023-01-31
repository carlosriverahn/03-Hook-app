import { memo } from 'react';

export const Small = memo(({ value }) => {
	console.log('tracking Memo');
	return <small>{value}</small>;
});
