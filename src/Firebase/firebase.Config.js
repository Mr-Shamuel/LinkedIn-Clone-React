
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCh4lH0XyGISGH73FBOJh_-1q44d8B8JVc",
    authDomain: "linkedin-clone-56294.firebaseapp.com",
    projectId: "linkedin-clone-56294",
    storageBucket: "linkedin-clone-56294.appspot.com",
    messagingSenderId: "938777749036",
    appId: "1:938777749036:web:8820ad2b8bcb642d3c9389"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;