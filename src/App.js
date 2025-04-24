import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import CreatePage from './Pages/Create'
import './App.css';
import {getAuth ,onAuthStateChanged} from './firebase/config'
/**
 * ?  =====Import Components=====
 */

import Home from './Pages/Home';
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './store/Context';



function App() {
	const {setUser}  = useContext(AuthContext) 
	const {database} = useContext(FirebaseContext)
	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth,(user )=>{
			setUser(user)
			
		})
	
	})
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
		  <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
