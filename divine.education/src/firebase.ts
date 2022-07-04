// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { GoogleAuthProvider, browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBgFwGeEQcKB8cTXOo7dylw-RZoVYwczjk',
  authDomain: 'divine-education.firebaseapp.com',
  projectId: 'divine-education',
  storageBucket: 'divine-education.appspot.com',
  messagingSenderId: '125337151260',
  appId: '1:125337151260:web:be214d1214ce1ce3f9bcd9',
  measurementId: 'G-482CZGLDGL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const authentication = getAuth(app)
export const onViewerChange = setPersistence(authentication, browserLocalPersistence)
.then(() => new Promise(resolve => {
  onAuthStateChanged(authentication, viewer => {
    console.log('viewer xxx', viewer)
    resolve(viewer)
  })
}))
export const googleProvider = new GoogleAuthProvider()
