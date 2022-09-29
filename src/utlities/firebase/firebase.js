
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {doc, getDoc, setDoc, getFirestore, query, getDocs, collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA6jx7ntkuodUr5wqDojHVnb10BGYNIXFs",
  authDomain: "soma-fashion.firebaseapp.com",
  projectId: "soma-fashion",
  storageBucket: "soma-fashion.appspot.com",
  messagingSenderId: "654442247745",
  appId: "1:654442247745:web:c774754d59b825ba6d78c0",
  measurementId: "G-GPN9ZQRTL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// extend the auth and database
export const auth = getAuth(app)
export const db = getFirestore(app)

// creating a google provider
export const googleProvider = new GoogleAuthProvider()


// setting your parameters
googleProvider.setCustomParameters({
    login_hint:'user@gmail.com'
})


// creating your google signin function
export const SignInWithGoogle = () => signInWithPopup(auth, googleProvider)



// creating for email and password signin login

export const SignInWithEmailAndPasword = async (email, password) => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}


export const CreateUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

return await createUserWithEmailAndPassword(auth, email, password)
}

// after signin in, this is the function for creating and storing our user details


export const createUserProfile =  async (userUid, otherParameters) => {
  if(!userUid) return;


  const refernceDoc = doc(db, 'users', userUid.uid)

  const snapshot = await getDoc(refernceDoc)

  // console.log(snapshot)
  // console.log(snapshot.exists())


  if(!snapshot.exists()){
    const {displayName, email, photoURL } = userUid;
    const date = new Date()

    try{
     await setDoc(refernceDoc, {
      displayName,
        email,
        photoURL,
        date,
        ...otherParameters
      })
    }catch(error){
      console.log(error)
    }
  }

 return refernceDoc
} 

// for logging out

export const LogOut = async () => {
 return await signOut(auth)
}

// for tracking our auth changes

export const authListeners = (callback) => {


  onAuthStateChanged(auth, callback)
}

// getting the userdata from our database


export const getUserData = async (userUid) => {

//   const collectionref = collection(db, 'users');

//   const q = query(collectionref);

//   const querySnapShot = await getDocs(q)

//   const docSnapShot = querySnapShot.docs
//  const theData = docSnapShot.map((data) => {return data.data()})

//  return theData


const refernceDoc = doc(db, 'users', userUid.uid)

  const snapshot = await getDoc(refernceDoc)

  const theData = snapshot.data()

  return theData

}
