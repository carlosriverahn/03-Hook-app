import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp';
// import CounterApp from './01-useState/CounterApp';
// import CounterCustomHook from './01-useState/CounterCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { Memorize } from './04-memos/memorize';
// import { MemoHook } from './04-memos/MemoHook';
import { Padre } from './05-tarea-memo/Padre';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <HooksApp /> */}
		{/* {<CounterApp />} */}
		{/* {<CounterCustomHook />} */}
		{/* {<SimpleForm />} */}
		{/* {<SimpleFormWithCustomHook/>} */}
		{/* {<MultipleCustomHooks />} */}
		{/* {<MemoHook />} */}
		{<Padre />}
	</React.StrictMode>
);
