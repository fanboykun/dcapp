<script>
    import {user} from '../Resources/user.js';
    import { activeConversation } from '../Resources/conversation.js';
    import Emptymessage from "./Emptymessage.svelte";

    let friend;

    let body = '';
    let time = new Date();

    const randomMessages = [
      {
        body: "Hey, how are you?",
        time: "12:00",
      },
      {
        body: "I'm fine, thanks",
        time: "12:01",
      },
      {
        body: "How are you?",
        time: "12:02",
      },
      {
        body: "I'm fine, thanks",
        time: "12:03",
      },
      {
        body: "How are you?",
        time: "12:04",
      },
      {
        body: "I'm fine, thanks",
        time: "12:05",
      },
      {
        body: "How are you?",
        time: "12:06",
      },
      {
        body: "I'm fine, thanks",
        time: "12:07",
      },
      {
        body: "How are you?",
        time: "12:08",
      },
      {
        body: "I'm fine, thanks",
        time: "12:09",
      },
      {
        body: "How are you?",
        time: "12:10",
      },
      {
        body: "I'm fine, thanks",
        time: "12:11",
      },
      {
        body: "How are you?",
        time: "12:12",
      },
      {
        body: "I'm fine, thanks",
        time: "12:13",
      },
      {
        body: "How are you?",
        time: "12:14",
      }
    ];

    activeConversation.subscribe(value => {
      friend =  value;
    });

    function evenOdd(i) {
      return i % 2;
    }

    function sendMessage() {
      var message = [
        {
          body: body,
          time: time.toLocaleTimeString(),
          sender: user,
        }
      ];
      console.log(message);
    }
</script>

{#if friend != ''}
<div class="intro-y col-span-12 lg:col-span-8 xxl:col-span-9">
  <div class="chat__box box">
    <!-- BEGIN: Chat Active -->
    <div class="h-full flex flex-col">
      <div class="flex flex-col sm:flex-row border-b border-gray-200 dark:border-dark-5 px-5 py-4">
        <div class="flex items-center">
          <div class=" w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit relative">
            <img
              alt="Rubick Tailwind HTML Admin Template"
              class="rounded-full"
              src={`https://ui-avatars.com/api/?name=${friend}&color=7F9CF5&background=EBF4FF`}
            />
          </div>
          <div class="ml-3 mr-auto">
            <div class="font-medium text-base">{friend}</div>
            <div class="text-gray-600 text-xs sm:text-sm">
              <!-- Hey, I am using chat <span class="mx-1">•</span> Online -->
            </div>
          </div>
        </div>
    </div>
    <div class="overflow-y-scroll scrollbar-hidden px-5 pt-5 flex-1">
        <!-- Begin Message -->
      {#each randomMessages as message, i (message.time)}
        <div class="chat__box__text-box flex items-end {evenOdd(i) === 0 ? 'float-right' : 'float-left'} mb-4">
          <!-- <div class="hidden sm:block dropdown mr-3 my-auto">
            
          </div> -->
          <div
            class="bg-theme-1 px-4 py-3 text-white  rounded-l-md rounded-t-md">
            {message.body}
            <div class="mt-1 text-xs text-theme-21">{message.time}</div>
          </div>
          <div class="w-10 h-10 hidden sm:block flex-none image-fit relative ml-5">
            <img
              alt="Rubick Tailwind HTML Admin Template"
              class="rounded-full"
              src="http://rubick-laravel.left4code.com/dist/images/profile-14.jpg"
            />
          </div>
        </div>
        <div class="clear-both" />
        {/each}
        <!-- End Message -->
    </div>

      <div class="pt-4 pb-10 sm:py-4 flex items-center border-t border-gray-200 dark:border-dark-5">
        <input bind:value={body} class="chat__box__input form-control dark:bg-dark-3 h-16 resize-none border-transparent px-5 py-3 shadow-none focus:ring-0"
          rows="1"
          placeholder="Type your message..."
        />
        <button type="submit" on:click|preventDefault={sendMessage} class=" w-8 h-8 sm:w-10 sm:h-10 block bg-theme-1 text-white rounded-full flex-none flex items-center justify-center mr-5">
          <!-- <i data-feather="send" class="w-4 h-4" /> -->
        </button>
      </div>
    </div>
    <!-- END: Chat Active -->
  </div>
</div>
{:else}
<Emptymessage />
{/if}

