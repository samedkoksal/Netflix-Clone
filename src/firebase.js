import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword,
signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";




const firebaseConfig = {
  apiKey: "-",
  authDomain: "-",
  projectId: "-",
  storageBucket: "-",
  messagingSenderId: "-",
  appId: "-"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {  
    try {  
        const response = await createUserWithEmailAndPassword(auth, email, password); 
        const user = response.user; 
        await addDoc(collection(db, "user"), {  
            uid: user.uid,  
            name,  
            authProvider: "local",  
            email,  
        });  
    } catch (error) {  
        console.log(error);  
        toast.error(error.code.split('/')[1].split('-').join(" ")); 
    }  
}

const logIn = async (email, password) => {  
    try {  
        const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {  
        console.log(error);  
        toast.error(error.code.split('/')[1].split('-').join(" "));  
    }  
}

const logOut = () => {
    signOut(auth);
}

export {auth,db,logIn,signUp,logOut};
