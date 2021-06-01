import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



const config = {
    apiKey: "AIzaSyBvXdiBW5ucQKny42nJ3grBOIfmmohFzG8",
    authDomain: "movie-dashboard-8bd6b.firebaseapp.com",
    projectId: "movie-dashboard-8bd6b",
    storageBucket: "movie-dashboard-8bd6b.appspot.com",
    messagingSenderId: "108222356640",
    appId: "1:108222356640:web:d2ed2d39ba09a4bb4cbdc5"
  }


  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }



export const createUserProfileDocument = async (userAuth,additionalData) =>{

  if(!userAuth){
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if(!snapShot.exists){

    const {displayName,email } = userAuth;

    const createdAt = new Date();

    try{
      await userRef.set(
        {displayName,email,createdAt,...additionalData}
      )
    }catch(error){

      console.log("error in creating user",error.message)

      
    }

  }


  return userRef;
}

export const firestore = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;