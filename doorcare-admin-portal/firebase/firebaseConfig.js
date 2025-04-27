// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "doorcare-app.firebaseapp.com",
  projectId: "doorcare-app",
  storageBucket: "doorcare-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);

export default app;
