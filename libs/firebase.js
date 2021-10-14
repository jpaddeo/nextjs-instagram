// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'fireabse/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSqZDt6E1eRVXLCt_jWIM4aXI52G2QkX0',
  authDomain: 'ig-2-clone.firebaseapp.com',
  projectId: 'ig-2-clone',
  storageBucket: 'ig-2-clone.appspot.com',
  messagingSenderId: '1024011388563',
  appId: '1:1024011388563:web:46471ccc8efc7c8a0d2f66',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
