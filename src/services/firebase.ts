import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUMu0HdLySS6P4Rjj03LfyZY71UzscfnE",
  authDomain: "auth-771ba.firebaseapp.com",
  projectId: "auth-771ba",
  storageBucket: "auth-771ba.appspot.com",
  messagingSenderId: "250681226809",
  appId: "1:250681226809:web:161a5a76ef34e984e97fe8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
