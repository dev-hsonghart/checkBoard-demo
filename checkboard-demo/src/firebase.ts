// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAIEpWH9N0mcOJysqp_7-CDGMFwfHyzDZs',
  authDomain: 'react-test-app-f6b21.firebaseapp.com',
  projectId: 'react-test-app-f6b21',
  storageBucket: 'react-test-app-f6b21.firebasestorage.app',
  messagingSenderId: '317225532115',
  appId: '1:317225532115:web:a3fca63aaf27ac7cb2f226',
  measurementId: 'G-MJVRJ6EY8T',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
