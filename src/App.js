// import { useEffect, useState } from "react";
// import {collection, getDocs } from 'firebase/firestore'
// import db from "./firebase";
import { GiBoltEye } from "react-icons/gi";
import Button from "./components/button";
import Input from "./components/input";

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
      <div className="py-4">
        <Input
          iconPosition="right"
          icon={<GiBoltEye size={48} color={"#cbd5e1"} />}
          placeholder="Enter user name"
          className=" bg-zinc-800 text-slate-200"
          type="text"
          // onChange={handleOnChange}
        />
      </div>
      <Button
        text="Sign Up"
        className="py-4 px-4 bg-cyan-200 text-gray-800 rounded-full "
      />
    </div>
  );
}

export default App;
