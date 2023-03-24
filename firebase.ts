import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAdswmppTWM6Bx1KwGkAVhu0Y-FpEK0uFQ",
  authDomain: "portfolio-e5ea8.firebaseapp.com",
  databaseURL: "https://portfolio-e5ea8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-e5ea8",
  storageBucket: "portfolio-e5ea8.appspot.com",
  messagingSenderId: "778709355027",
  appId: "1:778709355027:web:1d30b80bf73da2c68a0de6"
};

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
