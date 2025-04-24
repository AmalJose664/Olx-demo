import React, { useState , } from 'react';
//import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import ReactLoading from '../../utils/Loading'
import { useNavigate, Link } from 'react-router-dom';
import { getAuth , signInWithEmailAndPassword} from '../../firebase/config'


function Login() {

	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [authError, setError] = useState('')
	const [loading, setLoadingAnimation] = useState(false)

	//const { database } = useContext(FirebaseContext)
	
  	const handleLogin = async (e) => {
		setLoadingAnimation(true)
		//console.log(email,password);
	
    	e.preventDefault()
    	const auth = getAuth()
    	signInWithEmailAndPassword(auth,email,password).then( (userCredential)=> {
			//console.log(userCredential);
			setError(null)
			navigate('/')

			setLoadingAnimation(false)
	    }).catch((err)=> {
			setError(err.code)
			console.log(err.message);
			setLoadingAnimation(false)
		
		})
  	}
  return (
    <div>
      <div className={loading ? "loadings show" : "loadings"}>
        <ReactLoading />
      </div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo-olx'></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e) => { setEmail(e.target.value) }}
            defaultValue={email}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue={password}
            onChange={(e) => {setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
			  <Link to="/signup">Sign up</Link>{authError ? <p style={{ color: "red" }}>{authError}</p> : ""}
		  </div> <Link to="/">Go Back</Link>
    </div>
  );
}

export default Login;
