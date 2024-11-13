import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT0HvCzTcGJNH8YpWM-YbSsng4hnMY5Vk",
  authDomain: "auth-and-private-route-f1e6f.firebaseapp.com",
  projectId: "auth-and-private-route-f1e6f",
  storageBucket: "auth-and-private-route-f1e6f.firebasestorage.app",
  messagingSenderId: "169331876070",
  appId: "1:169331876070:web:af81eb3d30b72883189b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;