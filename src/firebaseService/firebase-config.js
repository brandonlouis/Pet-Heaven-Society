import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBDb82DqaKK9Z7rsQZKvvzzmJ4Pk7jBD3k",
  authDomain: "pet-heaven-society.firebaseapp.com",
  projectId: "pet-heaven-society",
  storageBucket: "pet-heaven-society.appspot.com",
  messagingSenderId: "441769172837",
  appId: "1:441769172837:web:8585493979974363450b8c",
  measurementId: "G-5470FBTCK0"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)