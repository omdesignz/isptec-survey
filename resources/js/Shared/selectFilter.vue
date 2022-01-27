<template>
    <div>
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <select v-model="filterId" id="location" name="location" class="block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300">
            <option v-for="(filter, index) in filters" :value="filter.id" key="index">{{ filter.label }}</option>
        </select>
      </div>
      <button @click="$emit('execute', filterId)" type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-ft-orange hover:text-white focus:outline-none">
        <FilterIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
        <span>Aplicar</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { FilterIcon, UsersIcon } from '@heroicons/vue/solid'

defineProps({
    filters: Array
});

const emit = defineEmits(['execute']);

const filterId = ref(null)
</script>
