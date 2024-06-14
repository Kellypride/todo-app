import { useEffect, useState } from "react";
import {collection, getDocs } from 'firebase/firestore'
import db from "./firebase";

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const userRef = collection(db, 'users');
    getDocs(userRef).then( (snapshot)=>{
        const users = [];
        snapshot.docs.forEach(doc => {
          const user = doc.data();
          users.push(user);
        })
        setUsers(users)
      })
    }, [])



  return (
    <div className="text-3xl font-bold underline text-white bg-zinc-950 h-screen text-center" >
      Hello world 
      <ul>
        {users.map( (user, key) => {
          return (
            <li className="text-white" key={key}>{user.name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
