import {app} from "./Firebase"
import {getFirestore,doc, setDoc} from "firebase/firestore"

export const firestore = getFirestore(app)

export const addUserToFirestore = async(user,role) =>{
    const userRef = doc(firestore,"users",user.uid)
    await setDoc(userRef,{
        uid:user.uid,
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
        role,
    })
}

export const updateUserProfile = async (uid, gender, bloodGrp, role, workExperience,disability) => {
    const userRef = doc(firestore, 'users', uid);
  
    await setDoc(userRef, {
      gender,
      BloodGrp: bloodGrp,
      Role: role,
      WorkExperience: workExperience,
      disability
    }, { merge: true });
  };
