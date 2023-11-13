import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKnbECcPXjf9bVNTt25AvW_PwZbgAQqy8",
  authDomain: "restaurantes-tandil.firebaseapp.com",
  projectId: "restaurantes-tandil",
  storageBucket: "restaurantes-tandil.appspot.com",
  messagingSenderId: "344284232564",
  appId: "1:344284232564:web:dd9238099677e9abb90a21"
};

export const initFirebase = initializeApp(firebaseConfig);