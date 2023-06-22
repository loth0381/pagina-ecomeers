/*esta es la base datos del proyecto*/

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBSoO0XHW8Z2bQsIr-mK7HsjOpEBKqWzQE",
  authDomain: "via7-2029f.firebaseapp.com",
  projectId: "via7-2029f",
  storageBucket: "via7-2029f.appspot.com",
  messagingSenderId: "240298820194",
  appId: "1:240298820194:web:fe7d81d065035bb4e8873b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db= getFirestore(app);
export const storage = getStorage(app);

export default app;