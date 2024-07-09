import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";
// import SignIn from "./pages/signin";
// import SignUp from "./pages/signup";
// import Calendar from "./components/calendar";
// import Card from "./components/cards";
import HomePage from "./pages/home";
import Status from "./components/status";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = collection(db, "users"); //collection ref
    getDocs(userRef).then((snapshot) => {
      //get collected data
      const users = [];
      snapshot.docs.forEach((doc) => {
        const user = doc.data();
        users.push(user);
      });
      setUsers(users);
      console.log(users);
    });
  }, []);

  return (
    <div className="px-4 py-8 lg:px-8 lg:py-12 object--top text-white bg-slate-950 min-h-screen min-w-screen ">
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Calendar day="Sun" date="10" className="!bg-cyan-200  !text-gray-800" /> */}
      {/* <Calendar day="Sun" date="10" /> */}
      <HomePage />
    </div>
  );
}

export default App;
