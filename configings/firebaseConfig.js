import { initializeApp } from 'firebase/app';

// for the auth
import { getAuth , GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

// to get from the env file
import { FIREAPIKEY, FIREPROJECTID, FIREMESSAGEERID, FIREAPPID } from '@env';

const firebaseConfig = {
  apiKey: FIREAPIKEY,
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: FIREPROJECTID,
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: FIREMESSAGEERID,
  appId: FIREAPPID,
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleauth = GoogleAuthProvider();
const facebookauth = FacebookAuthProvider();

export {auth , googleauth, facebookauth};

