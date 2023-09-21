import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider, signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCkZM-H6mRh60Oi-G7D0dFAcJM5Fnuuypc",
  authDomain: "museo-xul-solar.firebaseapp.com",
  projectId: "museo-xul-solar",
  storageBucket: "museo-xul-solar.appspot.com",
  messagingSenderId: "890696021004",
  appId: "1:890696021004:web:224d072695b45f67a42a29",
  measurementId: "G-9FHVW08EQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};