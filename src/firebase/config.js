import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { addDoc, collection } from 'firebase/firestore/lite'; 
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getAuth,signInWithEmailAndPassword,
    createUserWithEmailAndPassword,updateProfile, 
    onAuthStateChanged,signOut
} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDJDqwVscXAb1Jvx4uR-dwHZf0IsQW75ZI",
    authDomain: "new-firebase-58f8d.firebaseapp.com",
    projectId: "new-firebase-58f8d",
    storageBucket: "new-firebase-58f8d.firebasestorage.app",
    messagingSenderId: "642115047365",
    appId: "1:642115047365:web:67fe05335cc8e9cac885ac",
    measurementId: "G-C4GK4V1VTE"
};

const app = initializeApp(firebaseConfig)
export const  database = getFirestore(app);
export {signInWithEmailAndPassword,createUserWithEmailAndPassword,
    getAuth,updateProfile, addDoc, collection,onAuthStateChanged,
	signOut, getStorage, ref, uploadBytes
    

}