
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect, useState } from "react";
// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBvpidFZU0phgS347hgbYZN3waBckDuAM4",
    authDomain: "fire-test-bf9a3.firebaseapp.com",
    projectId: "fire-test-bf9a3",
    storageBucket: "fire-test-bf9a3.appspot.com",
    messagingSenderId: "1070553591384",
    appId: "1:1070553591384:web:d4bcbacd0b897564d7642d"
  };
// Initialize firebase and google providerfirebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// Sign in and sign out functins
const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);
  return (
    <Component 
      {...pageProps} 
      user={user} 
      signIn={signIn} 
      signOut={signOut} 
    />
  );
}
export default MyApp;