import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Define Firebase project configuration (replace with your actual configuration)
const firebaseConfig = {
    apiKey: "AIzaSyBIjVpDAkfC-PoKik8tdoLF1YjVxrxpNiQ",
    authDomain: "to-do-app-6f85d.firebaseapp.com",
    projectId: "to-do-app-6f85d",
    storageBucket: "to-do-app-6f85d.appspot.com",
    messagingSenderId: "628076040397",
    appId: "1:628076040397:web:57a7264f11d076b2401984"
  };
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

// Export the Firestore database reference for use in other components
export default db;
