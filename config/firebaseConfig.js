import { initializeApp } from "firebase/app";

const firebaseConfig={
    apiKey: 'AIzaSyDEI6fnhq1NiXzqmvrGSQ9c5PvLNY3a2vA',
    authDomain: 'fashion-store-dfaaf',
    projectId: 'fashion-store-dfaaf',
    storageBucket: 'fashion-store-dfaaf.appspot.com',
    messagingSenderId: '1064174166334',
    appId: '1:1064174166334:android:9b99265b19981b23a14c6f',
}

export const app=initializeApp(firebaseConfig)
// export const auth=getAuth(app) 