import {getAuth, signOut, onAuthStateChanged} from "firebase/auth";

class Auth {
    constructor(){
        this.auth = getAuth();
        this.user = null;

        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                this.user = user;
                console.log(this.user)
            } else {
                this.user = null;
            }
        })

    }
    addSignOut(id){
        const button = document.getElementById(id);
        button.addEventListener('click', () => {
            signOut(this.auth).then(() => {
                console.log('signed out')
            }).catch((error) => {
                console.log(error)
            })
        })
    }
}

export {Auth}