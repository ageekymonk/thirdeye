import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCBwDCLmak-rEipfbeEfNXuM50yq7xvSXA",
    authDomain: "thethirdeyeview123.firebaseapp.com",
    databaseURL: "https://thethirdeyeview123.firebaseio.com",
    projectId: "thethirdeyeview123",
    storageBucket: "thethirdeyeview123.appspot.com",
    messagingSenderId: "285472152863"
};

class AppFirebase {
    constructor() {
        this.fire = firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.database = firebase.database();
        this.storage = firebase.storage();
    }
}

let AppConfig = new AppFirebase();

export default AppConfig;