// import { useEffect, useState } from "react";
// import {collection, getDocs } from 'firebase/firestore'
// import db from "./firebase";
// import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

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
    <div className="px-4 py-8 lg:px-8 lg:py-12 object--top text-white bg-slate-950 h-screen w-screen ">
      {/* <SignIn /> */}
      <SignUp />
    </div>
  );
}

export default App;
