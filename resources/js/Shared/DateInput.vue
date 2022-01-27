<template>
    <DatePicker :model-config="modelConfig">
      <template v-slot="{ inputValue, togglePopover }">
        <div>
          <div class="mt-1 sm:mt-0 sm:col-span-2 max-w-lg sm:max-w-xs sm:text-sm flex">
            <div class="relative flex items-stretch flex-grow focus-within:z-10">
              <input readonly :value="(typeof inputValue === 'object' ? inputValue.start + ' - ' + inputValue.end : inputValue)" type="text" :name="name" :id="id" class="block w-full rounded-none rounded-l-md sm:text-sm border-r-0 border-gray-300 shadow-sm" placeholder="" />
            </div>
            <button @click="togglePopover()" type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-l-0 border-gray-300 text-sm font-medium rounded-r-md text-gray-500 hover:bg-ft-orange hover:bg-opacity-10 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>        
      </template>
    </DatePicker>
</template>

<script setup>
import { Calendar, DatePicker } from 'v-calendar';
import {ref} from 'vue'

let modelConfig = ref({
        type: 'string',
        mask: 'YYYY-MM-DD', // Uses 'iso' if missing
      })

defineProps({
    name: String,
    id: String,
});

</script>
