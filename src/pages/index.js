import { getAuth, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../firebase"


export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {  
    if(!user){
      router.push("/authenticate")
    }
  }, []);
  

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    {user ? <h1>{user.email}</h1> : <h1>Not logged in</h1>}
    <div className="">
      Thisi is a test.
    </div>
    <Link href={"/account"}>Go To Account Page</Link>
    </>
  )
}