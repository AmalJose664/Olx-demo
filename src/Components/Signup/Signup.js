import React, { useState ,useContext,} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { createUserWithEmailAndPassword, getAuth,updateProfile, addDoc, collection} from '../../firebase/config'
import { useNavigate, Link } from 'react-router-dom';
import ReactLoading from '../../utils/Loading'


export default function Signup() {
    const navigate = useNavigate()
  const auth = getAuth()
  const {database} = useContext(FirebaseContext)
  const [username,setUsername] = useState('') 
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('') 
  const [loading, setLoadingAnimation] = useState(false)
  const [authError,setError] = useState('')

 
  const handleSubmit = async (e)=>{
    setLoadingAnimation(true)
    e.preventDefault()
    //console.log(username,email,phone,password,)

    try {
        let result = await createUserWithEmailAndPassword(auth, email, password)
        setError(null)
        await updateProfile(result.user, { displayName: username })
    
        console.log('updated-profile')
    
        console.log(result, result.user);
        const collectionsRef = collection(database, 'users_olx')
        await addDoc(collectionsRef, {
            id: result.user.uid,
            username: username,
            phone: phone
            })
        navigate('/login')
    } catch(error){
        console.log(error.message);
        setError(error.code)
        setLoadingAnimation(false)

    }

      
  }
  return (
    <div>
      <div className={loading ? "loadings show" : "loadings"}>
        <ReactLoading />
      </div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo-image'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            onChange={(e)=>{setUsername(e.target.value)}}
            type="text"
            id="fname"
            name="name"
            defaultValue={username}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="ename"
            onChange={(e) => { setEmail(e.target.value) }}
            name="email"
            defaultValue={email}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            onChange={(e) => { setPhone(e.target.value) }}
            id="pno"
            name="phone"
            defaultValue={phone}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="pass"
            onChange={(e) => { setPassword(e.target.value) }}
            name="password"
            defaultValue={password}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
			<Link to="/login">Login</Link> {authError ? <p style={{color:"red"}}>{authError}</p> : ""}
      </div>
    </div>
  );
}
