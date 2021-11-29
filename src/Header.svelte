<script>
  import { username, user } from './Resources/user';

  function signout() {
    user.leave();
    username.set('');
  }
</script>

<div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Decentralized Chat App</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button on:click={signout} class="btn btn-primary shadow-md mr-2">
        Logout
      </button>
    </div>
</div>
