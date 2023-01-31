import { useState } from 'react';

export const Character = ({ data }) => {
	const [character, setCharacter] = useState({ data });

	console.log(character);
	const { family, title, fullName, imageUrl } = character.data;

	console.log(title);

	return (
			<div className="card m-3">
				<img src={imageUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{family}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{title}</li>
					<li className="list-group-item">{fullName}</li>
				</ul>
			</div>
	);
};
