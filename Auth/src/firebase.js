// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjDDDfNUaPzXvq2lEkywpaqUkSczXEAvQ",
  authDomain: "test-77803.firebaseapp.com",
  projectId: "test-77803",
  storageBucket: "test-77803.appspot.com",
  messagingSenderId: "124462566393",
  appId: "1:124462566393:web:705f09733e0eea76340b28",
  measurementId: "G-DXL24SCCJW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);