import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBJgTv7_pV3AbgkVDxv1348nmM-hTmJBu4',
  authDomain: 'portogram-d5b71.firebaseapp.com',
  projectId: 'portogram-d5b71',
  storageBucket: 'portogram-d5b71.appspot.com',
  messagingSenderId: '505863722961',
  appId: '1:505863722961:web:b942ad69423075e16072f0',
}

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectFirestore, projectStorage }
