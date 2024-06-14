// import { useEffect, useState } from "react";
// import {collection, getDocs } from 'firebase/firestore'
// import db from "./firebase";
import Header from "./components/header";




function App() {
  // const [users, setUsers] = useState([])

  // useEffect(()=>{
  //   const userRef = collection(db, 'users');
  //   getDocs(userRef).then( (snapshot)=>{
  //       const users = [];
  //       snapshot.docs.forEach(doc => {
  //         const user = doc.data();
  //         users.push(user);
  //       })
  //       setUsers(users)
  //     })
  //   }, [])



  return (
    <div className="px-4 py-8 lg:px-8 lg:py-12 object--top text-white bg-zinc-950 h-screen w-screen" >
      <Header/>
      {/* <ul>
        {users.map( (user, key) => {
          return (
            <li className="text-white" key={key}>{user.name}</li>
          )
        })}
      </ul> */}
    </div>
  );
}

export default App;
