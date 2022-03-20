import React from 'react';
import LinkForm from './LinkForm';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


const Links = () => {

  const usersCollectionRef = collection(db, "Links");

    const addTask = async () => {
        const data = await getDocs(usersCollectionRef)
        console.log(data)
    }

  return (
    <div className='container p-4'>
        <LinkForm addTask={addTask} />
    </div>
  )
}

export default Links