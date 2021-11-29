<script>
    import { username, pub } from "../Resources/user.js";

</script>
<div id="profile" class="tab-pane active" role="tabpanel" aria-labelledby="profile-tab">
  <div class="pr-1">
    <div class="box px-5 py-10 mt-5">
      <div class=" w-20 h-20 flex-none image-fit rounded-full overflow-hidden mx-auto">
        <img
          alt={$username}
          src={`https://ui-avatars.com/api/?name=${$username};color=7F9CF5&amp;background=EBF4FF`}
        />
      </div>
      <div class="text-center mt-3">
        <div class="font-medium text-lg">{$username}</div>
        <div class="text-gray-600 mt-1"></div>
      </div>
    </div>
    <div class="box p-5 mt-5">
      <div class="flex items-center border-b border-gray-200 dark:border-dark-5 pb-5">
        <div>
          <div class="text-gray-600">Username</div>
          <div class="mt-1">{$username}</div>
        </div>
        <i data-feather="globe" class="w-4 h-4 text-gray-600 ml-auto" />
      </div>
    </div>
    <div class="box p-5 mt-5">
      <div class="flex items-center border-b border-gray-200 dark:border-dark-5 pb-5">
        <div>
          <div class="text-gray-600">Your Public Key</div>
          <div class="mt-1 overflow-y-auto">
            <input type="text" bind:value={$pub} />
          </div>
        </div>
        <i data-feather="globe" class="w-4 h-4 text-gray-600 ml-auto" />
      </div>
    </div>
  </div>
</div>
