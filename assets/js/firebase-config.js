import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7JUmqLLQEY8RHrYCvWMnk1wZEfUQz0wA",
  authDomain: "olympic-sports-science.firebaseapp.com",
  projectId: "olympic-sports-science",
  storageBucket: "olympic-sports-science.firebasestorage.app",
  messagingSenderId: "809166475091",
  appId: "1:809166475091:web:f52212b6a0bac699219ba6",
  measurementId: "G-7DQV4SC9R9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
