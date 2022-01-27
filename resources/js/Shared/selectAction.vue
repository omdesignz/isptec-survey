<template>
    <div>
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <select v-model="actionId" id="location" name="location" class="block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300">
            <option v-for="(action, index) in actions" :value="action.id" key="index">{{ action.label }}</option>
        </select>
      </div>
      <button @click="$emit('execute', actionId)" type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-ft-orange hover:text-white focus:outline-none">
        <CursorClickIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
        <span>Aplicar</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { CursorClickIcon, UsersIcon } from '@heroicons/vue/solid'

defineProps({
    actions: Array
});

const emit = defineEmits(['execute']);

const actionId = ref(null)
</script>
