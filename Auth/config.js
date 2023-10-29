//firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig={
    apiKey: "AIzaSyCjDDDfNUaPzXvq2lEkywpaqUkSczXEAvQ",
    authDomain: "test-77803.firebaseapp.com",
    projectId: "test-77803",
    storageBucket: "test-77803.appspot.com",
    messagingSenderId: "124462566393",
    appId: "1:124462566393:web:705f09733e0eea76340b28",
    measurementId: "G-DXL24SCCJW"
}
//

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

}
export {firebase};