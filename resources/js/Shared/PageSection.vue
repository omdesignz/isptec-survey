<template>
     <div class="mt-2 md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <!-- <h2 class="text-xl font-semibold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            <slot name="title"></slot>
        </h2> -->
        <slot name="title"></slot>
      </div>
      <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <slot name="icon"></slot>
      </div>
    </div>
</template>

<script setup>
// defineProps({
//     title: String,
//     icon: String
// });
</script>
