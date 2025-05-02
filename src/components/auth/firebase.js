    import { initializeApp } from "firebase/app";
    import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    } from "firebase/auth";

    const firebaseConfig = {
    apiKey: "AIzaSyDI8UnLNNhZ2-0z2XMNvEqocdQRy9-fTvI",
    authDomain: "sirohi-calodash.firebaseapp.com",
    projectId: "sirohi-calodash",
    storageBucket: "sirohi-calodash.firebasestorage.app",
    messagingSenderId: "551717652648",
    appId: "1:551717652648:web:1a4e5ec62657044d259a9d",
    measurementId: "G-F5LWH0G1RE"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    export { 
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    };