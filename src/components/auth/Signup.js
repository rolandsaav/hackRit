import {auth,db} from "../../../firebase"
import {useSignInWithGoogle, useAuthState} from "react-firebase-hooks/auth"
import Link from "next/link";
import { addDoc, doc, getDoc, setDoc } from "firebase/firestore";


function Signup() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [currentUser, load, err] = useAuthState(auth);

  const signin = async () => {
    const userCred = await signInWithGoogle();
    const userDocRef = doc(db, "users", userCred.user.uid)
    const docSnap = await getDoc(userDocRef);
    if(docSnap.exists()){
      console.log("User exists already")
    }
    else {
      setDoc(userDocRef, {uid: userCred.user.uid, name: userCred.user.displayName})
      console.log("Created user")
    }
  }

  return (
    <>
    <button onClick={signin}>sign in please</button>
    <Link href={"/"}>HOME</Link>
    {currentUser ?
     <>
     {currentUser.email}
    </>
    : 
    <>
    Not logged in
    </>
    }
    </>
  )
}

export default Signup