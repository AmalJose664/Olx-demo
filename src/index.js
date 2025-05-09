import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext,  } from './store/Context';
import { Conetext } from './store/Context';
import {database} from './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
	
    <FirebaseContext.Provider value={{database}} >
		<Conetext>
			<App />
		</Conetext>
       
    </FirebaseContext.Provider>
    //</React.StrictMode>
);
