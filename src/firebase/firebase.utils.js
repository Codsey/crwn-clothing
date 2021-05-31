import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-WWDPrDl705j0DOwlaa0LGHLCxj2_IWU",
  authDomain: "crwn-db-ed311.firebaseapp.com",
  projectId: "crwn-db-ed311",
  storageBucket: "crwn-db-ed311.appspot.com",
  messagingSenderId: "106614579250",
  appId: "1:106614579250:web:0d6bfca0a09be0e6691c2b",
  measurementId: "G-CTJ6FMYRN8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
