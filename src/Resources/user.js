import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

// Database
// export const db = GUN({peers : ['https://euclive.herokuapp.com/gun']});
export const db = GUN();

// Gun User
export const user = db.user().recall({sessionStorage: true});

// Current User's username
export const username = writable('');
export const pub = writable('');

user.get('alias').on(v => username.set(v))

db.on('auth', async(event) => {
    const alias = await user.get('alias'); // username string
    const pubkey = await user.get('pub'); // public key string
    username.set(alias);
    pub.set(pubkey);

    console.log(`signed in as ${alias}`);
    console.log(`pubkey is ${pubkey}`);
});