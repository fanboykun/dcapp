<script>
    import GUN from 'gun';
    import { pub } from '../Resources/user.js';
    import { activeConversation } from '../Resources/conversation.js';

    const gun = GUN();
    let participant;

    function findByPub(participant) {
      // get user via public key
      gun.user(participant).once((data) => {
        if (!data) {
          alert('User not found');
          return;
        }
        activeConversation.set(data.alias);
      });
    }
    // get user via username or alias
    // function findByUsername(participant) {      
    //   gun.get('~@'+participant).once((data)=>{
    //     if (!data){
    //       alert('User not found');
    //     }
    //     console.log(JSON.stringify(data));
    //     // const anu = findByPub(data);
    //     // activeConversation.set(data.alias);
    //   }); 
    // }

    function createConversation(data) {
      gun.get('conversation').put({
            initiator: pub,
            listener: data.pub,
            createdAt: new Date().toISOString()
          }, function(ack) {
            // start coversation with this conversation
            // conversations.update(ack);  // add to conversations
            // activeConversation.set(ack);
            console.log(ack);
        });
      }

    function findConversation(data) {
      gun.get('conversation').get({
        initiator: pub,
        listener: data.pub,
      }).once((item) => {
        if (!item) {
          gun.get('conversation').get({
          initiator: data.pub,
          listener: pub,
          }).once((i) => {
            if (!i) {
              createConversation(data)
            }
            // start coversation with this conversation
            activeConversation.set(i);
          });
          // createConversation(data)
        }
        // start coversation with this conversation
        activeConversation.set(item);
      });
    }


</script>

<div class="pr-1">
    <div class="box p-5 mt-5">
      <div class="relative text-gray-700 dark:text-gray-300">
        <input type="text"
        bind:value={participant}
         class="
            form-control
            py-3
            px-4
            border-transparent
            bg-gray-200
            pr-10
            placeholder-theme-13
          " placeholder="Search a user by username.">
        <i class="
            w-4
            h-4
            hidden
            sm:absolute
            my-auto
            inset-y-0
            mr-3
            right-0
          " data-feather="search"></i>
      </div>
      <button type="submit" on:click={() => findByPub(participant)} class="btn btn-primary w-full mt-3">
        Find a User and Start a Conversation
      </button>
    </div>
</div>
