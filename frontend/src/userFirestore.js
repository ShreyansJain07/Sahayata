import {app} from "./firebase"
import {getFirestore,doc, setDoc} from "firebase/firestore"

export const firestore = getFirestore(app)

export const addUserToFirestore = async(user) =>{
    const userRef = doc(firestore,"users",user.uid)
    await setDoc(userRef,{
        uid:user.uid,
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
    })
}