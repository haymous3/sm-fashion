
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updatePassword, updateProfile} from "firebase/auth";
import {doc, getDoc, setDoc,  getFirestore, updateDoc, arrayUnion} from "firebase/firestore";


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

export const getUserData = async (userUid) => {

  //   const collectionref = collection(db, 'users');
  
  //   const q = query(collectionref);
  
  //   const querySnapShot = await getDocs(q)
  
  //   const docSnapShot = querySnapShot.docs
  //  const theData = docSnapShot.map((data) => {return data.data()})
  
  //  return theData
  
  
  const refernceDoc = doc(db, 'users', userUid.uid)
  
    const snapshot = await getDoc(refernceDoc)
    try{
      const theData = snapshot.data()
  
      return theData
  
    }catch(error){
      console.log(error.message)
    }
    
  
  }
  

// after signin in, this is the function for creating and storing our user details


export const createUserProfile =  async (userUid, otherParameters,p, a,c ,d) => {
  if(!userUid) return;


  const refernceDoc = doc(db, 'users', userUid.uid)

  const snapshot = await getDoc(refernceDoc)

  // console.log(snapshot)
  // console.log(snapshot.exists())


  if(!snapshot.exists()){
    const {displayName, email, photoURL} = userUid;
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
  }if(snapshot.exists()){
    // const {displayName} = userUid;
    const date = new Date()

    try{
     await updateDoc(refernceDoc, {
      phone_Number: p,
    displayName : a,
    password: c,
    confirm: d,
        date,
        ...otherParameters
      })
    }catch(error){
      console.log(error)
    }
  }
 return refernceDoc
} 

// updating the user password

export const UpdateUserPassword = async(example) => {

  try {
   await updatePassword(auth.currentUser, example)
  } catch (error) {
    console.log(error.message)
  }

}

// updating user profile

export const updateUserProfiles = async(a, ...otherParameters) => {
  
  try {
    await updateProfile(auth.currentUser, {
   displayName: a,
   ...otherParameters
      
    })
  } catch (error) {
    console.log(error.message)
  }
}



//checking for the provider 
export const checkProvider = () => {
  let result;
  if (auth.currentUser !== null) {
    auth.currentUser.providerData.forEach((profile) => {
       result = profile.providerId
    });
  }
  console.log(result)
  return result
}



// creating the payment details for all users

export const createPaymentProfile =  async (userUid, otherParameters, newpara) => {

  if(!userUid) return;

  
  const refernceDoc = doc(db, 'payments', userUid)
  console.log(refernceDoc)
  const snapshot = await getDoc(refernceDoc)
  
  if(!snapshot.exists()){
 
    try{
     await setDoc(refernceDoc, 
      {hey: [otherParameters]}
     
       
      )
    }catch(error){
      console.log(error)
    }

    
  } 
   if(snapshot.exists() === true){
 
      try{
       await updateDoc(refernceDoc, 
        {hey: arrayUnion(otherParameters)}
       
         
        )
      }catch(error){
        console.log(error)
      }
      
    }  
  

 return refernceDoc
} 

// creating the items bought details for all users

export const createBoughtItems =  async (userUid, otherParameters, newpara) => {

  if(!userUid) return;

  
  const refernceDoc = doc(db, 'itemsbought', userUid)
  console.log(refernceDoc)
  const snapshot = await getDoc(refernceDoc)
  
  if(!snapshot.exists()){
 
    try{
     await setDoc(refernceDoc, 
     {hey: [otherParameters]}
     
       
      )
    }catch(error){
      console.log(error)
    }

    
  } 
   if(snapshot.exists() === true){
 
      try{
       await updateDoc(refernceDoc, 
      {hey: arrayUnion(otherParameters)}
       
         
        )
      }catch(error){
        console.log(error)
      }
      
    }  
  

 return refernceDoc
} 


// get payment details

export const getPayementDetails = async (userUid) => {

  const reference = doc(db, 'payments', userUid)

  const paymentSnapShot = await getDoc(reference);

 

  try {
    const thePaymentDetails = paymentSnapShot.data()
    console.log(thePaymentDetails)
    return thePaymentDetails;
  } catch (error) {
    console.log(error.message)
  }

 
}

// get items bought details

export const getItemsDetails = async (userUid) => {

  const reference = doc(db, 'itemsbought', userUid)

  const itemsbought = await getDoc(reference);

 

  try {
    const theIemsbought = itemsbought.data()
    console.log(theIemsbought)
    return theIemsbought;
  } catch (error) {
    console.log(error.message)
  }

 
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


