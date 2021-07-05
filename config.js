import * as firebase from 'firebase';
requestAnimationFrame('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAn89e2v8Kz1vPOXXWAqPNBiOeV4BXRLpc",
    authDomain: "story-hub-dfec8.firebaseapp.com",
    projectId: "story-hub-dfec8",
    storageBucket: "story-hub-dfec8.appspot.com",
    messagingSenderId: "909767248405",
    appId: "1:909767248405:web:17ec0adeb1709f40cf9c1c"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();