import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyALn0j48UYvQHCdEU1otYox-S4_LwTseYI",
    authDomain: "adminpanel-sixflags.firebaseapp.com",
    projectId: "adminpanel-sixflags",
    storageBucket: "adminpanel-sixflags.firebasestorage.app",
    messagingSenderId: "66695464850",
    appId: "1:66695464850:web:ce530729ef352677c0634b",
    measurementId: "G-3SVH0TK8WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    let addDataBtn = document.getElementById("addData");
    
    const addData = async () => {
        const usersDoc = collection(db, "users");
        try {
            await addDoc(usersDoc, {
                username: "fgrreloaded",
                email: "email_id@gmail.com",
                profile_picture: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc"
            });
            console.log("Data added successfully");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    addDataBtn.addEventListener("click", addData);
});

