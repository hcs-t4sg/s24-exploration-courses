import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function addProfile(profile) {
  const result = null;
  let error = null;

  try {
    const { uid, ...profileData } = profile;
    const newProfileRef = doc(db, "users", uid);
    await setDoc(newProfileRef, profileData);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function updateProfile(profile) {
  const result = null;
  let error = null;

  try {
    const { uid, ...profileData } = profile;
    const newProfileRef = doc(db, "users", uid);
    await updateDoc(newProfileRef, profileData);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
