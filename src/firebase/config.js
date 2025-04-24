import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { addDoc, collection } from 'firebase/firestore/lite'; 
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getAuth,signInWithEmailAndPassword,
    createUserWithEmailAndPassword,updateProfile, 
    onAuthStateChanged,signOut
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MESUREMENT_ID
};

const app = initializeApp(firebaseConfig)
export const  database = getFirestore(app);
export {signInWithEmailAndPassword,createUserWithEmailAndPassword,
    getAuth,updateProfile, addDoc, collection,onAuthStateChanged,
	signOut, getStorage, ref, uploadBytes
    

}