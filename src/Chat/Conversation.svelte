<script>
   import { activeConversation } from '../Resources/conversation.js';
   import {user} from '../Resources/user.js';
   import { onMount } from 'svelte';
   import GUN from 'gun';

   const gun = GUN();
   var conversations = [
     {
       "name": "John",
     },
     {
       "name": "Dhoe",
     }
   ];

  function findConversation() {
      gun.get('conversation').map().once((data) => {
        if (!data) {
          console.log('No Conversation Yet');
          return;
        }
        console.log(data);
        // data = data;
        // conversations.set(data);
      });
  }

  function beginConversation(event) {
    activeConversation.set(event);
  }

  function randomConversation() {
    conversations.forEach((conversation) => {
      user.get('friends').put(conversation);
    });
    findFriends();
  }

  function findFriends() {
    user.get('friends').once((data) => {
      if (!data) {
        console.log('No Friends Yet');
        return;
      }
      console.log(data);
    });
  }

  onMount(() => {
    // findConversation();
    // findFriends();
  });

</script>

<div class="chat__chat-list  overflow-y-auto  scrollbar-hidden  pr-1  pt-1  mt-4">
  <button type="button" on:click={randomConversation} class="btn btn-primary w-full mt-3">
    Generate Random Conversation
  </button>
  {#each conversations as conversation}
  <div on:click={() => beginConversation(conversation.name)} class="intro-x cursor-pointer box relative flex items-center p-5 mt-5">
    <div class="w-12 h-12 flex-none image-fit mr-1">
      <img
        alt="Rubick Tailwind HTML Admin Template"
        class="rounded-full"
        src="https://ui-avatars.com/api/?name=Danuja+Kasusra+Anggriawan&amp;color=7F9CF5&amp;background=EBF4FF"
      />
      <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"/>
    </div>
    <div class="ml-2 overflow-hidden" id="chatbox">
      <div class="flex items-center">
        <a role="button" type="button" href="javascript:;" class="font-medium">{conversation.name}</a>
        <div class="text-xs text-gray-500 ml-auto">
          <span> 04:01 </span>
        </div>
      </div>
      <div class="w-full truncate text-gray-600 mt-0.5">orgil yah?</div>
    </div>
    <div class="w-5 h-5 flex items-center justify-center absolute top-0 right-0 text-xs text-white rounded-full bg-theme-1 font-medium -mt-1 -mr-1">1
    </div>
  </div>
  {/each}
</div>
