import React, { Fragment, useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext } from '../../store/Context';
import {getStorage,ref, uploadBytes} from '../../firebase/config'


const Create = () => {

	const {user} = useContext(AuthContext)

	const [name,setName] = useState('')
	const [category,setCategory] = useState('')
	const [price, setPrice] = useState('')
	const [image, setImage] = useState(null)

	const storage = getStorage()
	const storageRef = ref(storage,'child')

	

	const handleSubmit = (e)=>{
		e.preventDefault()
		console.log("submited");
		console.log(user);
		uploadBytes(storageRef , image).then((snapshot)=>{
			console.log("donee!!!!!!!!!!!");
			console.log(snapshot);
			
		})
		
	}

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue={name}
			  onChange={(e)=>{
				setName(e.target.value)
			  }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue={category}
			  onChange={(e)=>{
				setCategory(e.target.value)
			  }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price}
			onChange={(e)=>{
				setPrice(e.target.value)
			  }}
			/>
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          <form>
            <br />
            <input type="file" onChange={(e)=>{
				setImage(e.target.files[0])
			  }}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
