<script>
  import Chatuser from "./Chatuser.svelte";
  import Chatmessage from "./Chatmessage.svelte";
  import Profile from "./Profile.svelte";
  
  function handleClick(newTab) {
    tab = newTab;
    console.log(tab);
  }
  let tab = "chat";

</script>

<div class="intro-y chat grid grid-cols-12 gap-5 mt-5">
  <div class="col-span-12 lg:col-span-4 xxl:col-span-3">
    <!-- tab -->
    <div class="intro-y pr-1">
      <div class="box p-2">
        <div class="chat__tabs nav nav-tabs justify-center" role="tablist">
          <a on:click={() => handleClick("chat")} class="flex-1 py-2 rounded-md text-center {tab == "chat" ? 'active' : ''}" role="button" type="button" aria-controls="chats">
            Chats
          </a>
          <a on:click={() => handleClick("profile")} class="flex-1 py-2 rounded-md text-center {tab == "profile" ? 'active' : ''}" role="button" type="button" aria-controls="profile">
            Profile
          </a>
        </div>
      </div>
    </div>
    <!-- end tab -->

    <!-- tab content -->
    <div class="tab-content">
      {#if tab == "chat"}
      <Chatuser></Chatuser>
      {:else if tab == "profile"}
      <Profile></Profile>
      {/if}
    </div>
    <!-- end tab content -->

  </div>
  <Chatmessage></Chatmessage>
</div>

