<template>
  <div class="bg-white">
    <div class="flex-1 flex justify-between sm:hidden">
      <a href="#" class="relative inline-flex items-center py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Previous
      </a>
      <a href="#" class="ml-3 relative inline-flex items-center py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Next
      </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Apresentando
          <span class="font-medium">{{ from }}</span>
          a
          <span class="font-medium">{{ to }}</span>
          de
          <span class="font-medium">{{ total }}</span>
          {{ total > 1 ? 'registros' : 'registro' }}
        </p>
      </div>
      <div v-if="last_page > 1">
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button :disabled="noPreviousPage" @click="loadPage(1)" :class="{'text-opacity-50': noPreviousPage}" class="z-10 text-ft-gray relative inline-flex items-center px-4 py-2 text-sm font-medium">
              <ChevronDoubleLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            <button :disabled="noPreviousPage" @click="loadPage(current_page - 1)" :class="{'text-opacity-50': noPreviousPage}" class="z-10 text-ft-gray relative inline-flex items-center px-4 py-2 text-sm font-medium">
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            
            <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:items-center md:space-x-1">
              <input type="number" @keydown.enter="loadPage(data.page)" v-model="data.page" class="z-10 w-14 text-ft-gray relative inline-flex items-center px-4 py-2 text-sm font-medium rounded border border-gray-400 shadow-sm"/>
              <div class="px-2 text-gray-600 lg:text-sm">de {{ last_page }}</div>
            </div>
            
            <button :disabled="noNextPage" @click="loadPage(current_page + 1)" :class="{'text-opacity-50': noNextPage}" class="z-10 text-ft-gray relative inline-flex items-center px-4 py-2 text-sm font-medium">
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            <button :disabled="noNextPage" @click="loadPage(last_page)" :class="{'text-opacity-50': noNextPage}" class="z-10 text-ft-gray relative inline-flex items-center px-4 py-2 text-sm font-medium">
              <ChevronDoubleRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
        </nav>
      </div>
    </div>
  </div>

</template>

<script setup="props">
import {watch, computed, reactive} from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/vue/solid'

const props = defineProps({
    links: Array,
    total: Number,
    from: Number,
    to: Number,
    last_page: Number,
    current_page: Number,
})

let data = reactive({
  page: props.current_page
})

let loadPage = (page) => {
  Inertia.get(Inertia.page.url, {page: page}, {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => Promise.all([
          
      ]),
      // onFinish: () => (enabling = false),
  })
}

let noPreviousPage = computed(() => {
    return props.current_page - 1 <= 0;
});

let noNextPage = computed(() => {
    return props.current_page + 1 > props.last_page;
});

let pageChange = watch(() => props.current_page, (first, second) => {
  data.page = props.current_page;
});
</script>