<script>
    import { username } from './Resources/user';
    import Header from './Header.svelte';
    import Chatbox from "./Chat/Chatbox.svelte";
    import Login from "./Login.svelte";
    
    // let loggedIn;
    // username.subscribe(value => {
    //     loggedIn = true;
    //     console.log(value);
    // });
</script>
{#if $username}
<Header></Header>
<div class="main">
    <div class="content">
        <Chatbox />
    </div>
</div>
{:else}
<div class="login">
    <Login />
</div>
{/if}


