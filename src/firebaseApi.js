import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
  } from "firebase/firestore";
  import { db } from "./config";
  
  const collectionName = "websites";
  
  export const savevalues = (newLink) =>
    addDoc(collection(db, collectionName), newLink);
  
  export const updatevalues = (id, updatedFields) =>
    updateDoc(doc(db, collectionName, id), updatedFields);
  
  export const onGetLinks = (callback) => {
    const unsub = onSnapshot(collection(db, collectionName), callback);
    return unsub;
  };
  
  export const getvalues = () => getDocs(collection(db, collectionName));
  
  export const deletevalues = (id) => deleteDoc(doc(db, collectionName, id));
  
  export const getvalues = (id) => getDoc(doc(db, collectionName, id));